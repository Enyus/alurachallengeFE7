"use client";

import { FormEvent, useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { SearchContext } from "../Contextos/SearchProvider";
import MenuLista from "./MenuLista";
import Logo from "./Logo";
import FormularioCabecalho from "./FormularioCabecalho";

export default function Cabecalho() {
  const [menu, setMenu] = useState(false);
  const {setSearch} = useContext(SearchContext);
  const [searchString, setSearchString] = useState("");


  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(searchString);
  }

  return (
    <header className="w-full bg-primary-black text-primary-gray flex flex-col md:flex-row items-center justify-between text-xs lg:text-base">
      <div className="w-screen md:w-auto max-w-[320px] flex items-center justify-between">
        <Logo />

        <FaBars
          className="md:hidden text-primary-yellow h-16 mr-6"
          size={24}
          onClick={() => setMenu(true)}
        />
      </div>

      {menu ? <MenuLista exibicaoCelular={true} aoFechar={() => setMenu(false)} /> : <MenuLista exibicaoCelular={false} />}

      <FormularioCabecalho
          aoEnviarFormulario={handleSubmitSearch}
          aoMudar={(e:any) => setSearchString(e.target.value)}
          aoFocar={() => setSearchString("")}
          valorBusca={searchString}
      />
    </header>
  );
}
