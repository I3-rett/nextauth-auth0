"use client";
import { SessionProvider } from "next-auth/react";
export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
