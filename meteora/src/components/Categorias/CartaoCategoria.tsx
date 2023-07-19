'use client';

import Image from "next/image";
import categoriaTypes from "@/utils/categoriaTypes";
import { CategoriaAtivaContext } from "../Contextos/CategoriaAtivaProvider";
import { useContext } from "react";
import { SearchContext } from "../Contextos/SearchProvider";

export default function CartaoCategoria (props: {propsCategoria: categoriaTypes}) {
    let {categoriaAtiva, setCategoriaAtiva} = useContext(CategoriaAtivaContext);
    let {search, setSearch} = useContext(SearchContext);

    const handleAlterarCategoriaAtiva = () => {
      if(categoriaAtiva == props.propsCategoria.id) {
        setCategoriaAtiva(0);
        setSearch("");
      } else {
        setCategoriaAtiva(props.propsCategoria.id);
        setSearch(props.propsCategoria.id);
      }
    }

    return (
        <button 
            className={`cardCategoria block w-full max-w-[160px] ${categoriaAtiva == props.propsCategoria.id ? "border-4 border-primary-purple scale-110" : "" }`} 
            onClick={handleAlterarCategoriaAtiva}
        >
              <picture>
                <source srcSet={props.propsCategoria.imgDesktop} media="(min-width: 1024px)" />
                <source srcSet={props.propsCategoria.imgTablet} media="(min-width: 768px)" />
                <Image
                  src={props.propsCategoria.imgMobile}
                  alt={`Categoria ${props.propsCategoria.nome}`}
                  width={160}
                  height={157}
                  className="object-fill w-full"
                />
              </picture>
              <span className="bg-primary-black text-white h-[35px] flex items-center justify-center">{props.propsCategoria.nome}</span>
        </button>
    )
};