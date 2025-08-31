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
import { Download, Trash2, ChevronDown, Edit, Eye, EyeOff, Lock, User } from "lucide-react";
import SuccessModal from "@/components/common/SuccessModal";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [contacts, setContacts] = useState<any[]>([]);
    const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingContact, setEditingContact] = useState<any>(null);
    const [editForm, setEditForm] = useState({
        name: "",
        email: "",
        companyName: "",
        jobTitle: "",
        phone: "",
        subject: "",
        message: ""
    });

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
        setIsLoading(true);
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
            setModalMessage("Network error occurred");
            setModalType("error");
            setModalOpen(true);
        } finally {
            setIsLoading(false);
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
            Source: contact.source || 'N/A',
            Name: contact.name || 'N/A',
            Email: contact.email || 'N/A',
            Company: contact.companyName || 'N/A',
            Subject: contact.subject || 'N/A',
            'Job Title': contact.jobTitle || 'N/A',
            Message: contact.message || 'N/A',
            Phone: contact.phone || contact.phoneNumber || 'N/A',
            'Created At': contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'
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
            head: [['Source', 'Name', 'Email', 'Company', 'Subject', 'Job Title', 'Message', 'Phone', 'Created At']],
            body: data.map(contact => [
                contact.Source,
                contact.Name,
                contact.Email,
                contact.Company,
                contact.Subject,
                contact['Job Title'],
                contact.Message,
                contact.Phone,
                contact['Created At']
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

    const handleEditContact = (contact: any) => {
        setEditingContact(contact);
        setEditForm({
            name: contact.name || "",
            email: contact.email || "",
            companyName: contact.companyName || "",
            jobTitle: contact.jobTitle || "",
            phone: contact.phone || contact.phoneNumber || "",
            subject: contact.subject || "",
            message: contact.message || ""
        });
        setEditModalOpen(true);
    };

    const handleUpdateContact = async () => {
        if (!editingContact) return;

        try {
            const res = await fetch("/api/contact/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    contactId: editingContact._id,
                    ...editForm
                }),
            });

            const result = await res.json();
            
            if (res.ok) {
                setModalMessage("Contact updated successfully");
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
                
                // Close edit modal
                setEditModalOpen(false);
                setEditingContact(null);
                setEditForm({
                    name: "",
                    email: "",
                    companyName: "",
                    jobTitle: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            } else {
                setModalMessage(result.message || "Failed to update contact");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Update error:", error);
            setModalMessage("Error updating contact");
            setModalType("error");
            setModalOpen(true);
        }
    };

    const handleCancelEdit = () => {
        setEditModalOpen(false);
        setEditingContact(null);
        setEditForm({
            name: "",
            email: "",
            companyName: "",
            jobTitle: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4">
            <div className="w-full space-y-6">
                {!token ? (
                    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                        <div className="w-full max-w-md mx-4">
                            {/* Glassmorphism Card */}
                            <Card className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 border border-white/20 dark:border-slate-700/50 shadow-2xl shadow-blue-500/10 dark:shadow-slate-900/50">
                                <CardContent className="p-8 space-y-6">
                                    {/* Header with Icon */}
                                    <div className="text-center space-y-2">
                                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                            <Lock className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                            Welcome Back
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Sign in to access your dashboard
                                        </p>
                                    </div>

                                    {/* Username Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="username" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Username
                                        </Label>
                                        <div className="relative group">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                                            <Input
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Enter your username"
                                                className="pl-10 h-12 border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:bg-white/70 dark:hover:bg-slate-700/70"
                                                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Password
                                        </Label>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                className="pl-10 pr-12 h-12 border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:bg-white/70 dark:hover:bg-slate-700/70"
                                                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Login Button */}
                                    <Button 
                                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        onClick={handleLogin}
                                        disabled={isLoading || !username.trim() || !password.trim()}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Signing in...</span>
                                            </div>
                                        ) : (
                                            "Sign In"
                                        )}
                                    </Button>

                                    {/* Secret Message */}
                                    <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                                        <p className="text-center text-sm text-slate-500 dark:text-slate-400 italic">
                                            🎉 Hello visitor, you discovered a secret!
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-18">
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
                            <div className="rounded-md border border-white/10 overflow-x-auto mt-16 w-full">
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
                                            <TableHead>Source</TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Company</TableHead>
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Job Title</TableHead>
                                            <TableHead>Message</TableHead>
                                            <TableHead>Phone</TableHead>
                                            <TableHead>Created At</TableHead>
                                            <TableHead className="min-w-[100px]">Actions</TableHead>
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
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        contact.source === 'newsletter' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                        contact.source === 'demo_request' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                                    }`}>
                                                        {contact.source || 'N/A'}
                                                    </span>
                                                </TableCell>
                                                <TableCell>{contact.name || 'N/A'}</TableCell>
                                                <TableCell>{contact.email}</TableCell>
                                                <TableCell>{contact.companyName || 'N/A'}</TableCell>
                                                <TableCell>{contact.subject || 'N/A'}</TableCell>
                                                <TableCell>{contact.jobTitle || 'N/A'}</TableCell>
                                                <TableCell>{contact.message || 'N/A'}</TableCell>
                                                <TableCell>{contact.phone || contact.phoneNumber || 'N/A'}</TableCell>
                                                <TableCell>{contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                                                <TableCell className="min-w-[100px]">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleEditContact(contact)}
                                                        className="flex items-center gap-1 whitespace-nowrap"
                                                    >
                                                        <Edit className="w-3 h-3" />
                                                        Edit
                                                    </Button>
                                                </TableCell>
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
            
            {/* Edit Modal */}
            {editModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Edit Contact</h2>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="edit-name">Name</Label>
                                <Input
                                    id="edit-name"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                    placeholder="Enter name"
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="edit-email">Email</Label>
                                <Input
                                    id="edit-email"
                                    type="email"
                                    value={editForm.email}
                                    onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                    placeholder="Enter email"
                                    className="mt-1"
                                />
                            </div>
                            {editingContact?.source === 'contact' ? (
                                <>
                                    <div>
                                        <Label htmlFor="edit-subject">Subject</Label>
                                        <Input
                                            id="edit-subject"
                                            value={editForm.subject}
                                            onChange={(e) => setEditForm({...editForm, subject: e.target.value})}
                                            placeholder="Enter subject"
                                            className="mt-1"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <Label htmlFor="edit-company">Company Name</Label>
                                        <Input
                                            id="edit-company"
                                            value={editForm.companyName}
                                            onChange={(e) => setEditForm({...editForm, companyName: e.target.value})}
                                            placeholder="Enter company name"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="edit-job">Job Title</Label>
                                        <Input
                                            id="edit-job"
                                            value={editForm.jobTitle}
                                            onChange={(e) => setEditForm({...editForm, jobTitle: e.target.value})}
                                            placeholder="Enter job title"
                                            className="mt-1"
                                        />
                                    </div>
                                </>
                            )}
                            <div>
                                <Label htmlFor="edit-phone">Phone Number</Label>
                                <Input
                                    id="edit-phone"
                                    value={editForm.phone}
                                    onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                                    placeholder="Enter phone number"
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="edit-message">Message</Label>
                                <textarea
                                    id="edit-message"
                                    value={editForm.message}
                                    onChange={(e) => setEditForm({...editForm, message: e.target.value})}
                                    placeholder="Enter message"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
                                    rows={4}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Button onClick={handleUpdateContact} className="flex-1">
                                Update Contact
                            </Button>
                            <Button variant="outline" onClick={handleCancelEdit} className="flex-1">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            
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