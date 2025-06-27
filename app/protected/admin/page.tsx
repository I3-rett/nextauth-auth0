"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Admin from "@/components/Admin";

export default function Page() {
    const { data: session } = useSession();
    if (!session || !session.user?.roles?.includes("admin")) {
        return (
            <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
                <p className="text-lg">Access Denied: Admins only</p>
                <Link
                    href="/protected"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-4"
                >
                    Go back to Protected Area
                </Link>
            </div>
        );
    }
    return (
        <Admin />
    );
}