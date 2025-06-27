import Link from "next/link";
import Image from "next/image";

export default function Admin() {
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
                <div className="flex flex-col items-center gap-4">
                    <p className="text-lg">Admin only area</p>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/protected"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600"
                        >
                            Go back to Protected Area
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}