'use client';

import Image from "next/image";
import { useState } from "react";
import { ProdutosFakeDB } from "../../public/fakeDB/produtos";
import formatPreco from "../../public/scripts/formatPreco";
import ModalProduto from "./ModalProduto";
import {supabase} from "../utils/supabase";

interface produtosTypes {
    id: number;
    imgDesktop: string;
    imgTablet: string;
    imgMobile: string;
    categoriaId: number;
    nome: string;
    desc: string;
    preco: number;
}

interface dataTypes {
    data: produtosTypes[] | null;
    error: object | null;
}

export default async function Produtos () {
    let [modalStatus, setModalStatus] = useState(false)
    let [produtoMostrado, setProdutoMostrado] = useState({
        id: 0,
        nome: '',
        desc: '',
        preco: 0,
        imgDesktop: '',
        imgTablet: '',
        imgMobile: '',
        categoriaId: 0
    });

    let produtos: produtosTypes[] | null;

    let {data, error}:dataTypes = await supabase
    .from('produtos')
    .select('*')

    console.log(data)
    console.log(error)
 
    if (!error) {
        produtos = data;
    } else {
        console.log(data)
        console.log(error);
        produtos = ProdutosFakeDB;
    }

    return (
        <section className="px-7 md:px-10 lg:px-40 mt-10 mb-10 lg:mb-20">
            <h2 className="text-3xl text-primary-black text-center mb-8">Produtos que estão bombando!</h2>
            <div className="grid grid-cols-1 flex-wrap gap-3 justify-between sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >

                {produtos != null ? produtos.map( produto => {
                    return (
                        <div key={produto.id} className="w-full max-w-[350px] flex flex-col items-center">
                            <picture>
                                <source srcSet={produto.imgDesktop} media="(min-width: 1024px)" />
                                <source srcSet={produto.imgTablet} media="(min-width: 768px)" />
                                <Image 
                                    src={produto.imgMobile}
                                    width={350}
                                    height={422}
                                    alt={produto.nome}
                                    className="object-fill"
                                />
                            </picture>
                            <div className="m-4">
                                <h3 className="font-bold mb-[15px]">{produto.nome}</h3>
                                <p className="mb-[15px] text-[13px] text-secondary-black">{produto.desc}</p>
                                <p className="font-bold mb-[10px]">{formatPreco(produto.preco / 100)}</p>
                                <button 
                                    className="text-white bg-primary-purple px-4 py-2 font-medium"
                                    onClick={()=>{
                                        setProdutoMostrado(produto);
                                        setModalStatus(true);;
                                    }}
                                >
                                    Ver mais
                                </button>
                            </div>
                        </div>
                    )
                }) : null}

            </div>
            
            {modalStatus ? 
                <ModalProduto 
                    id={produtoMostrado.id} 
                    imgDesktop={produtoMostrado.imgDesktop}
                    imgTablet={produtoMostrado.imgTablet}
                    imgMobile={produtoMostrado.imgMobile} 
                    categoriaId={produtoMostrado.categoriaId}
                    nome={produtoMostrado.nome} 
                    desc={produtoMostrado.desc} 
                    preco={produtoMostrado.preco} 
                    onClose={() => setModalStatus(false)} 
                /> 
                : null}
            
        </section>
    )
}