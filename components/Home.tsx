import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            <Link href="/protected" className="text-blue-500 hover:underline">
                Restricted area
            </Link>
        </main>
    </div>
}