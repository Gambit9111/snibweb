import { concert } from "@/app/page"
import { cn } from "@/utils/cn"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center mt-36 mb-8 lg:mb-10 gap-4 tracking-tighter lg:flex-row lg:items-center lg:justify-between lg:px-32">
            <h2 className={cn(concert.className, "text-xl lg:text-2xl")}>$SNIB 2024 | All Rights Reserved</h2>
            <h2 className={cn(concert.className, "text-xl lg:text-2xl")}>Contact: <Link className="underline hover:text-gray-400" href="gmail.com">admin@snibmeme.xyz</Link></h2>
        </footer>
    )
}

export default Footer