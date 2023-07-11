'use client';

import Image from "next/image";
import { useContext, useState } from "react";
import { SearchContext } from "./SearchProvider";

interface categoriaTypes {
    id: number;
    key: number;
    imgDesktop: string;
    imgTablet: string;
    imgMobile: string;
    nome: string;
  }

export default function CartaoCategoria (props: categoriaTypes) {
    const {search, setSearch} = useContext(SearchContext);
    const [ativo, setAtivo] = useState(false);
    
    const handleClick = () => {
        if (ativo) {
          setSearch("");
        } else {
          setSearch(props.id);
        }
        setAtivo(!ativo);
    }

    return (
        <button 
            className={`block w-full max-w-[160px] ${ativo ? "border-4 border-primary-purple scale-110" : "" }`} 
            key={props.key}
            onClick={handleClick}
        >
              <picture>
                <source srcSet={props.imgDesktop} media="(min-width: 1024px)" />
                <source srcSet={props.imgTablet} media="(min-width: 768px)" />
                <Image
                  src={props.imgMobile}
                  alt={`Categoria ${props.nome}`}
                  width={160}
                  height={157}
                  className="object-fill w-full"
                />
              </picture>
              <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">{props.nome}</p>
        </button>
    )
};