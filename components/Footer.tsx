import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const logoImage = "/assets/logos/logo-tiara-games.svg";
  const getYear = new Date().getFullYear();

  return (
    <footer className="footer bg-footer text-white py-10">
      <div className="container mx-auto px-4 md:px-32 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-20">
        <div className="md:col-span-2">
          <div className="flex flex-row items-center gap-3">
            <Image
              src={logoImage}
              alt="TiaraGames Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              Tiara
              <span className="text-[#FBB017]"> Games</span>
            </h3>
          </div>

          <p className="text-sm text-justify text-white">
          Tiara Games adalah situs web ideal bagi para gamer yang ingin mengisi saldo akun mereka 
          dengan harga terjangkau dan terpercaya. Kami dipercaya sebagai penyedia top-up tercepat 
          dan paling responsif di Indonesia. Kami menawarkan berbagai metode pembayaran yang aman, 
          termasuk transfer bank, rekening bank virtual, dompet elektronik, dan pemindaian QR, 
          yang membuat transaksi menjadi nyaman dan aman. Selain itu, tim layanan pelanggan 
          kami tersedia 24/7 untuk membantu Anda kapan pun dibutuhkan.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#f5960b] mb-4">Sitemap</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-300 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-yellow-300 text-">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="hover:text-yellow-300 text-white"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/transaction-check"
                className="hover:text-yellow-300 text-white"
              >
                Cek Transaksi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#f5960b] mb-4">Bantuan</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://wa.me/62895332410677?text=Halo,%20admin%20saya%20membutuhkan%20bantuan"
                className="hover:text-yellow-300 text-white"
                target="_blank"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#f5960b] mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-yellow-300 text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-yellow-300 text-white"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-32 mt-8 flex space-x-4 text-2xl">
        <Link
          href="https://instagram.com/doelkussoy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://wa.me/62895332410677?text=Halo,%20admin%20saya%20membutuhkan%20bantuan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href="mailto:tokotokstoree@gmail.com"
          className="text-white hover:text-blue-500"
          rel="noopener noreferrer"
        >
          <MdOutlineEmail />
        </Link>
      </div>

      <div className="mt-8 text-center text-sm text-[#64AFD0]">
        <div className="px-4 md:px-32 max-w-screen-lg mx-auto border-t border-[#989898] pt-4">
          Tiara Games © {getYear} by Asoyy Dev.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
