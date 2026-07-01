import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Container from "../commonUi/Container";

export default function Header() {
  return (
    <header className="w-full bg-[#121212] text-white">
      <Container>
        <div className="flex items-center justify-between h-20 px-4">
          <div className="flex items-center gap-10 h-full">
            <Link href="/" className="mr-2 flex items-center h-full">
              <span className="font-black text-2xl tracking-wider uppercase italic text-white">
                BODY
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-bold tracking-wider h-1/2">
              <Link
                href="/women"
                className="relative flex items-center h-full text-zinc-400 hover:text-white uppercase group transition-colors"
              >
                WOMEN
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
              <Link
                href="/men"
                className="relative flex items-center h-full text-zinc-400 hover:text-white uppercase group transition-colors"
              >
                MEN
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
              <Link
                href="/kids"
                className="relative flex items-center h-full text-zinc-400 hover:text-white uppercase group transition-colors"
              >
                KIDS
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
              <Link
                href="/lifestyle"
                className="relative flex items-center h-full text-zinc-400 hover:text-white uppercase group transition-colors"
              >
                LIFESTYLE
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
              <Link
                href="/sport"
                className="relative flex items-center h-full text-zinc-400 hover:text-white uppercase group transition-colors"
              >
                SPORT
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
              <Link
                href="/sale"
                className="relative flex items-center h-full text-red-500 hover:text-red-400 uppercase group transition-colors"
              >
                SALE
                <span className="absolute bottom-0 left-0 w-full h-0.75 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-out" />
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-[#242424] text-white text-xs font-bold tracking-wider uppercase pl-10 pr-4 py-2.5 w-60 border border-zinc-700 focus:outline-none focus:border-zinc-400 transition-all placeholder-zinc-500"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <button className="hover:text-white transition-colors p-2 hover:bg-zinc-700 rounded-full cursor-pointer">
                <Heart className="w-5.5 h-5.5 stroke-[1.5]" />
              </button>
              <button className="hover:text-white transition-colors p-2 hover:bg-zinc-700 rounded-full cursor-pointer">
                <ShoppingCart className="w-5.5 h-5.5 stroke-[1.5]" />
              </button>
              <button className="hover:text-white transition-colors p-2 hover:bg-zinc-700 rounded-full cursor-pointer">
                <User className="w-5.5 h-5.5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
