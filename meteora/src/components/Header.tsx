"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const menuList = () => {
    return (
      <ul className="fixed top-0 right-0 bg-[#343A40] px-6 py-4 text-base items-center gap-10 md:gap-4 md:flex mr-auto">
        <li className="text-primary-yellow font-bold text-right text-2xl sm:hidden" onClick={() => setMenu(false)}>X</li>
        <li className="border-b-[1px] border-white py-2 text-primary-yellow"><a href="#">Home</a></li>
        <li className="border-b-[1px] border-white py-2"><a href="#">Nossas lojas</a></li>
        <li className="border-b-[1px] border-white py-2"><a href="#">Novidades</a></li>
        <li className="py-2"><a href="#">Promoções</a></li>
      </ul>
    );
  };

  return (
    <header className="w-screen bg-primary-black text-primary-gray flex flex-col md:flex-row items-center justify-between text-xs lg:text-base">
      <div className="w-screen md:w-auto max-w-[320px] flex items-center justify-between">
        <div className="relative h-8 md:h-6 w-28 md:w-36 ml-6 mr-10 md:mr-4">
          <Image
            alt="Logo da loja Meteora"
            src="/desktop/logo_desktop.png"
            fill
          />
        </div>

        <FaBars
          className="md:hidden text-primary-yellow h-16 mr-6"
          size={24}
          onClick={() => setMenu(true)}
        />
      </div>

      {menu ? menuList() : (
        <ul className="hidden items-center gap-10 md:gap-4 md:flex mr-auto">
          <li><a href="#">Home</a></li>
          <li><a href="#">Nossas lojas</a></li>
          <li><a href="#">Novidades</a></li>
          <li><a href="#">Promoções</a></li>
        </ul>
      )}

      <div className="md:mr-6 flex gap-3 py-6 bg-white sm:bg-inherit w-screen sm:w-auto justify-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o produto"
          className="px-4 text-primary-black border border-primary-black"
        />
        <button className="px-3 py-2 border border-primary-black md:border-white text-primary-black md:text-inherit">
          Buscar
        </button>
      </div>
    </header>
  );
}
