"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
export default function Protected() {
    const { data: session } = useSession()
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <Link href="/" className="text-blue-500 hover:underline">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </Link>
                {session && session.user ? (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-lg">Welcome, {session.user.name}!</p>
                        <div className="flex items-center gap-2">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
                            {session.user.roles && session.user.roles.includes("admin") && (
                                <Link
                                    href="/protected/admin"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600"
                                >
                                    Admin Area
                                </Link>
                            )}
                        </div>
                        {session.user.roles && session.user.roles.length > 0 ? (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Roles:</h3>
                                <ul className="list-disc list-inside">
                                    {session.user.roles.map((role, index) => (
                                        <li key={index}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">No roles assigned.</p>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-lg">You are not signed in.</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => signIn("auth0")}
                        >
                            Sign in
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}