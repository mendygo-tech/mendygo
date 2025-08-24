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
import { Copy } from "lucide-react";
import SuccessModal from "@/components/common/SuccessModal";

const AuthPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState<string | null>(null);
    const [contacts, setContacts] = useState<any[]>([]);
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
            fetch("https://m.satyamjha.me/contact/get", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setContacts(data))
                .catch((err) => console.error("Error fetching contacts:", err));
        }
    }, [token]);

    const handleLogin = async () => {
        try {
            const res = await fetch("https://m.satyamjha.me/auth/login", {
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
    };

    const copyAllEmails = () => {
        const emails = contacts.map((c) => c.email).join(", ");
        navigator.clipboard.writeText(emails).then(() => {
            setModalMessage("All emails copied to clipboard!");
            setModalType("success");
            setModalOpen(true);
        });
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
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h1 className="text-xl font-bold">Contacts</h1>
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={copyAllEmails}>
                                    <Copy className="w-4 h-4 mr-1" />
                                    Copy All Emails
                                </Button>
                                <Button variant="destructive" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </div>

                        {contacts.length > 0 ? (
                            <div className="rounded-md border border-white/10 overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Phone</TableHead>
                                            <TableHead>Message</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {contacts.map((contact, index) => (
                                            <TableRow key={index}>
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