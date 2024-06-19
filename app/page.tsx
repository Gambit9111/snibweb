import Link from "next/link";

import Image from "next/image"
import Logo from "@/public/snib-meme.webp"
import { cn } from "@/utils/cn";

import { Concert_One } from "next/font/google";
export const concert = Concert_One({weight: ["400"], subsets: ["latin"]})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-12 lg:pt-4">
      <div className="flex flex-col text-center items-center justify-center w-full">
        <h1 className="text-4xl tracking-tight lg:text-8xl">$SNIB $SNIB $SNIB</h1>
        <div className={cn(concert.className, "flex flex-col lg:flex-row pt-4 lg:pt-8 tracking-tighter lg:gap-12")}>
          <h2 className="text-4xl lg:text-5xl">0/0 Tax</h2>
          <h2 className="text-4xl lg:text-5xl">1,000,000,000 Supply</h2>
          <h2 className="text-4xl lg:text-5xl">Own $SNIB Stay Wealthy</h2>
        </div>
        <Link href="https://app.uniswap.org/swap"><Image src={Logo} alt="logo" className="w-80 h-80 lg:w-[720px] lg:h-[720px] rounded-full border-2 border-[#FDDC01] hover:border-gray-400 my-16 lg:my-24" /></Link>
        <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}>
          <Link href="https://www.dextools.io" className="underline hover:text-gray-400">DexTool</Link>
          <Link href="https://dexscreener.com/" className="underline hover:text-gray-400">DexScreener</Link>
        </div>
        <Link href="https://app.uniswap.org/swap"><button className="text-lg lg:text-xl animate-rock bg-[#FDDC01] text-[#211720] border border-[#ffeb65] hover:bg-gray-400 font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-lg shadow-lg my-12 lg:my-16">
          BUY NOW
        </button></Link>
        {/* Why this does not break into new line on small screen??? */}
        <div className={cn(concert.className, "")}>
          <h3 className="overflow-wrap-anywhere text-3xl lg:text-4xl">CA: 0x6f1ec26c8CE8138bAa314C39Fb2BA1c890d07944</h3>
        </div>
        <h1 className="text-4xl mt-24 tracking-tight lg:mt-32 lg:text-6xl">HOW TO BUY</h1>
        <h2 className={cn(concert.className, "text-3xl pt-4 tracking-tighter lg:text-4xl")}>Follow these steps to buy $SNIB and join our hodlers! <span className="underline text-gray-400">NOT A FINANCIAL ADVICE :| </span> </h2>

        <div className="w-4/6 hidden lg:flex flex-col lg:pt-16">
          <div className="flex items-center lg:pb-16">
            <div className="flex items-center justify-center w-8 h-8 bg-[#FDDC01] rounded-full text-black text-xs font-bold">1</div>
            <div className="flex-1 h-[6px] bg-[#FDDC01]"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-[#FDDC01] rounded-full text-black text-xs font-bold">2</div>
            <div className="flex-1 h-[6px] bg-[#FDDC01]"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-[#FDDC01] rounded-full text-black text-xs font-bold">3</div>
            <div className="flex-1 h-[6px] bg-[#FDDC01]"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-[#FDDC01] rounded-full text-black text-xs font-bold">4</div>
          </div>
          <div className="flex gap-2">
            <div>
              <h1 className="text-3xl">GET A WALLET</h1>
              <h2 className={cn(concert.className, "text-2xl pt-4 tracking-tighter")}>Download your wallet of choice (Metamask...)</h2>
            </div>
            <div>
              <h1 className="text-3xl">GET SOME ETH</h1>
              <h2 className={cn(concert.className, "text-2xl pt-4 tracking-tighter")}>Buy some ETH from an exchange (Binance, Bybit...)</h2>
            </div>
            <div>
              <h1 className="text-3xl">GO TO DEX</h1>
              <h2 className={cn(concert.className, "text-2xl pt-4 tracking-tighter")}>Click BUY NOW, link your wallet to start swapping</h2>
            </div>
            <div>
              <h1 className="text-3xl">CHOOSE AMOUNT</h1>
              <h2 className={cn(concert.className, "text-2xl pt-4 tracking-tighter")}>Select the amount of $SNIB you want to buy and swap!</h2>
            </div>
          </div>
        </div>


        <div className="flex lg:hidden mt-24">
          <div className="flex flex-col items-start w-1/6">
            <div className="relative flex flex-col items-center justify-between h-full">
              <div className="absolute h-full border-l-[6px] border-[#FDDC01]"></div>
              <div className="w-8 h-8 bg-[#FDDC01] flex items-center justify-center rounded-full z-40 text-black text-xs font-bold">1</div>
              <div className="w-8 h-8 bg-[#FDDC01] flex items-center justify-center rounded-full mb-10 z-40 text-black text-xs font-bold">2</div>
              <div className="w-8 h-8 bg-[#FDDC01] flex items-center justify-center rounded-full mb-10 z-40 text-black text-xs font-bold">3</div>
              <div className="w-8 h-8 bg-[#FDDC01] flex items-center justify-center rounded-full z-40 text-black text-xs font-bold">4</div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 gap-12">
            <div>
              <h1 className="text-2xl tracking-tight">GET A WALLET</h1>
              <h2 className={cn(concert.className, "text-xl tracking-tighter pt-2")}>Download your wallet of choice, (Metamask...)</h2>
            </div>
            <div>
              <h1 className="text-2xl tracking-tight">GET SOME ETH</h1>
              <h2 className={cn(concert.className, "text-xl tracking-tighter pt-2")}>Buy some ETH from an exchange (Binance, Bybit...)</h2>
            </div>
            <div>
              <h1 className="text-2xl tracking-tight">GO TO DEX</h1>
              <h2 className={cn(concert.className, "text-xl tracking-tighter pt-2")}>Click BUY NOW, link your wallet to start swapping</h2>
            </div>
            <div>
              <h1 className="text-2xl tracking-tight">SELECT AN AMOUNT</h1>
              <h2 className={cn(concert.className, "text-xl tracking-tighter pt-2")}>Select the amount of $SNIB you want to buy and swap!</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
