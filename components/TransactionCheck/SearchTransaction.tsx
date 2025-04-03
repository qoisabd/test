import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";

interface SearchTransactionProps {
  onSearch: (value: string) => void;
}

const SearchTransaction = ({ onSearch }: SearchTransactionProps) => {
  return (
    <section className="px-4 md:px-32 bg-blue-90 relative shadow-2xl">
      <div className="container relative py-12 text-left text-white">
        <div>
          <h2 className="maw-w-2xl text-3xl sm:text-4xl font-bold tracking-tight">
              Lacak pesanan Anda di sini !
          </h2>
          <p className="mt-6 max-w-3xl capitalize">
          Pesanan Anda tidak terdaftar meskipun Anda yakin telah memesan? Harap tunggu 1-5 menit. 
          Namun jika pesanan masih belum muncul, Anda dapat{" "}
            <Link
              href="https://wa.me/62895332410677?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20pesanan saya"
              target="_blank"
              className="underline underline-offset-2 decoration-yellow-500"
            >
              Hubungi Kami
            </Link>
          </p>
        </div>
        <div className="max-w-xl mt-5">
          <label htmlFor="search-input" className="text-sm mb-2 block">
            Masukan nomor pesananmu
          </label>
          <div className="relative">
            <Search className="absolute z-10 left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />
            <Input
              placeholder="Trxxxxxxxx"
              className="pl-10 text-black placeholder-blue-300"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTransaction;
