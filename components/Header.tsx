import Logo from "@/public/snib-meme.webp"
import Image from "next/image"
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
    return (
        <header className="py-8 px-8 lg:py-12 lg:px-32">
            <div className="flex justify-between">
                <Link href="/"><Image src={Logo} alt="logo" className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border-2 border-[#FDDC01] hover:border-gray-400" /></Link>
                <div className="flex py-4 gap-8 lg:gap-12">
                    <Link href="https://x.com/Snib_Coin"><FaTwitter className="w-10 lg:w-14 h-10 lg:h-14 hover:text-gray-400"/></Link>
                    <Link href="https://t.me/snibcoin"><FaTelegramPlane className="w-10 lg:w-14 h-10 lg:h-14 hover:text-gray-400" /></Link>
                </div>
            </div>
        </header>
    )
}

export default Header