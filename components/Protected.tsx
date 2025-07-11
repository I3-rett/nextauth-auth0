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
                        <pre className="bg-gray-100 text-sm p-4 rounded w-full max-w-xl overflow-x-auto text-left whitespace-pre-wrap">
                            {JSON.stringify(session.user, null, 2)}
                        </pre>
                        <div className="flex items-center gap-2">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-lg">You are not signed in.</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => signIn("mandataire", { callbackUrl: "/protected", redirect: true })}
                        >
                            Sign in
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}