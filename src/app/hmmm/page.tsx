"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Download, Trash2, ChevronDown } from "lucide-react";
import SuccessModal from "@/components/common/SuccessModal";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState<string | null>(null);
    const [contacts, setContacts] = useState<any[]>([]);
    const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            fetch("/api/contact/get", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setContacts(data))
                .catch((err) => console.error("Error fetching contacts:", err));
        }
    }, [token]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (showExportDropdown && !target.closest('.relative')) {
                setShowExportDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showExportDropdown]);

    const handleLogin = async () => {
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const result = await res.json();
            if (res.ok && result.token) {
                localStorage.setItem("token", result.token);
                setToken(result.token);
            } else {
                setModalMessage(result.message || "Login failed");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setContacts([]);
        setSelectedContacts([]);
    };

    const getDataToExport = (selectedOnly: boolean = false) => {
        const dataToExport = selectedOnly 
            ? contacts.filter(contact => selectedContacts.includes(contact._id))
            : contacts;
        
        return dataToExport.map(contact => ({
            Name: contact.name || '',
            Email: contact.email || '',
            Subject: contact.subject || '',
            Phone: contact.phoneNumber || '',
            Message: contact.message || '',
            Date: contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : ''
        }));
    };

    const exportToPDF = (selectedOnly: boolean = false) => {
        const data = getDataToExport(selectedOnly);
        const doc = new jsPDF();
        
        const title = selectedOnly ? `Selected Contacts (${data.length})` : `All Contacts (${data.length})`;
        doc.setFontSize(16);
        doc.text(title, 20, 20);
        
        autoTable(doc, {
            startY: 30,
            head: [['Name', 'Email', 'Subject', 'Phone', 'Message', 'Date']],
            body: data.map(contact => [
                contact.Name,
                contact.Email,
                contact.Subject,
                contact.Phone,
                contact.Message,
                contact.Date
            ]),
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185] }
        });
        
        const filename = selectedOnly ? 'selected-contacts.pdf' : 'all-contacts.pdf';
        doc.save(filename);
        
        setModalMessage(`${title} exported successfully!`);
        setModalType("success");
        setModalOpen(true);
    };

    const exportToExcel = (selectedOnly: boolean = false) => {
        const data = getDataToExport(selectedOnly);
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
        
        const filename = selectedOnly ? 'selected-contacts.xlsx' : 'all-contacts.xlsx';
        XLSX.writeFile(wb, filename);
        
        const title = selectedOnly ? `Selected Contacts (${data.length})` : `All Contacts (${data.length})`;
        setModalMessage(`${title} exported successfully!`);
        setModalType("success");
        setModalOpen(true);
    };

    const exportToCSV = (selectedOnly: boolean = false) => {
        const data = getDataToExport(selectedOnly);
        const ws = XLSX.utils.json_to_sheet(data);
        const csv = XLSX.utils.sheet_to_csv(ws);
        
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const filename = selectedOnly ? 'selected-contacts.csv' : 'all-contacts.csv';
        saveAs(blob, filename);
        
        const title = selectedOnly ? `Selected Contacts (${data.length})` : `All Contacts (${data.length})`;
        setModalMessage(`${title} exported successfully!`);
        setModalType("success");
        setModalOpen(true);
    };

    const handleSelectContact = (contactId: string) => {
        setSelectedContacts(prev => 
            prev.includes(contactId) 
                ? prev.filter(id => id !== contactId)
                : [...prev, contactId]
        );
    };

    const handleSelectAll = () => {
        if (selectedContacts.length === contacts.length) {
            setSelectedContacts([]);
        } else {
            setSelectedContacts(contacts.map(contact => contact._id));
        }
    };

    const handleDeleteSelected = async () => {
        if (selectedContacts.length === 0) {
            setModalMessage("Please select contacts to delete");
            setModalType("error");
            setModalOpen(true);
            return;
        }

        try {
            const res = await fetch("/api/contact/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ contactIds: selectedContacts }),
            });

            const result = await res.json();
            
            if (res.ok) {
                setModalMessage(`Successfully deleted ${result.deletedCount} contact(s)`);
            setModalType("success");
                setModalOpen(true);
                
                // Refresh contacts list
                const contactsRes = await fetch("/api/contact/get", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const contactsData = await contactsRes.json();
                setContacts(contactsData);
                setSelectedContacts([]);
            } else {
                setModalMessage(result.message || "Failed to delete contacts");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Delete error:", error);
            setModalMessage("Error deleting contacts");
            setModalType("error");
            setModalOpen(true);
        }
    };

    const handleDeleteAll = async () => {
        if (contacts.length === 0) {
            setModalMessage("No contacts to delete");
            setModalType("error");
            setModalOpen(true);
            return;
        }

        const allContactIds = contacts.map(contact => contact._id);
        
        try {
            const res = await fetch("/api/contact/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ contactIds: allContactIds }),
            });

            const result = await res.json();
            
            if (res.ok) {
                setModalMessage(`Successfully deleted all ${result.deletedCount} contact(s)`);
                setModalType("success");
                setModalOpen(true);
                setContacts([]);
                setSelectedContacts([]);
            } else {
                setModalMessage(result.message || "Failed to delete all contacts");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Delete all error:", error);
            setModalMessage("Error deleting all contacts");
            setModalType("error");
            setModalOpen(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white p-4">
            <div className="w-full max-w-5xl space-y-6">
                {!token ? (
                    <>
                        <Card>
                            <CardContent className="space-y-4 p-6">
                                <h2 className="text-2xl font-semibold text-center">Login</h2>
                                <div>
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter username"
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="mt-1"
                                    />
                                </div>
                                <Button className="w-full" onClick={handleLogin}>
                                    Login
                                </Button>
                            </CardContent>
                        </Card>
                        <p className="text-center text-muted-foreground mt-2">
                            Hello visitor, you discovered a secret.
                        </p>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-14">
                            <h1 className="text-xl font-bold">
                                Contacts {selectedContacts.length > 0 && `(${selectedContacts.length} selected)`}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <div className="relative">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setShowExportDropdown(!showExportDropdown)}
                                        className="flex items-center gap-1"
                                    >
                                        <Download className="w-4 h-4" />
                                        Export Data
                                        <ChevronDown className="w-4 h-4" />
                                    </Button>
                                    
                                    {showExportDropdown && (
                                        <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                                            <div className="p-2">
                                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 px-2">
                                                    Export Format
                                                </div>
                                                
                                                {/* Selected Data Export Options */}
                                                {selectedContacts.length > 0 && (
                                                    <>
                                                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 px-2">
                                                            Selected ({selectedContacts.length})
                                                        </div>
                                                        <button 
                                                            onClick={() => { exportToPDF(true); setShowExportDropdown(false); }}
                                                            className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                        >
                                                            📄 PDF - Selected
                                                        </button>
                                                        <button 
                                                            onClick={() => { exportToExcel(true); setShowExportDropdown(false); }}
                                                            className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                        >
                                                            📊 Excel - Selected
                                                        </button>
                                                        <button 
                                                            onClick={() => { exportToCSV(true); setShowExportDropdown(false); }}
                                                            className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                        >
                                                            📋 CSV - Selected
                                                        </button>
                                                        <hr className="my-2 border-gray-200 dark:border-gray-600" />
                                                    </>
                                                )}
                                                
                                                {/* All Data Export Options */}
                                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 px-2">
                                                    All Data ({contacts.length})
                                                </div>
                                                <button 
                                                    onClick={() => { exportToPDF(false); setShowExportDropdown(false); }}
                                                    className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                >
                                                    📄 PDF - All
                                                </button>
                                                <button 
                                                    onClick={() => { exportToExcel(false); setShowExportDropdown(false); }}
                                                    className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                >
                                                    📊 Excel - All
                                                </button>
                                                <button 
                                                    onClick={() => { exportToCSV(false); setShowExportDropdown(false); }}
                                                    className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                >
                                                    📋 CSV - All
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {selectedContacts.length > 0 && (
                                    <Button variant="destructive" onClick={handleDeleteSelected}>
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Delete Selected ({selectedContacts.length})
                                    </Button>
                                )}
                                {contacts.length > 0 && (
                                    <Button variant="destructive" onClick={handleDeleteAll}>
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Delete All
                                </Button>
                                )}
                                <Button variant="destructive" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </div>

                        {contacts.length > 0 ? (
                            <div className="rounded-md border border-white/10 overflow-x-auto mt-16">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-12">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedContacts.length === contacts.length && contacts.length > 0}
                                                    onChange={handleSelectAll}
                                                    className="rounded"
                                                />
                                            </TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Phone</TableHead>
                                            <TableHead>Message</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {contacts.map((contact, index) => (
                                            <TableRow key={contact._id || index}>
                                                <TableCell>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedContacts.includes(contact._id)}
                                                        onChange={() => handleSelectContact(contact._id)}
                                                        className="rounded"
                                                    />
                                                </TableCell>
                                                <TableCell>{contact.name}</TableCell>
                                                <TableCell>{contact.email}</TableCell>
                                                <TableCell>{contact.subject}</TableCell>
                                                <TableCell>{contact.phoneNumber}</TableCell>
                                                <TableCell>{contact.message}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground text-center">No contacts found.</p>
                        )}
                    </>
                )}
            </div>
            <SuccessModal
                isOpen={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </div>
    );
};

export default AuthPage;