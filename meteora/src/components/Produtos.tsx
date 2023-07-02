'use client';

import Image from "next/image";
import { useState } from "react";
import { ProdutosFakeDB } from "../../public/fakeDB/produtos";
import formatPreco from "../../public/scripts/formatPreco";
import ModalProduto from "./ModalProduto";

export default function Produtos () {
    let produtos = ProdutosFakeDB;
    let [modalStatus, setModalStatus] = useState(false)
    let [produtoMostrado, setProdutoMostrado] = useState({})

    return (
        <section className="px-7 md:px-10 lg:px-40 mt-10 mb-10 lg:mb-20">
            <h2 className="text-3xl text-primary-black text-center mb-8">Produtos que estão bombando!</h2>
            <div className="flex flex-wrap gap-3 justify-between">
                {produtos.map( produto => {
                    return (
                        <div key={produto.id} className="w-[323px] xl:w-[350px] flex flex-col items-center">
                            <Image 
                                src={produto.img}
                                width={350}
                                height={422}
                                alt={produto.nome}
                                className="object-fill"
                            />
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
                })}
            </div>
            
            {modalStatus ? <ModalProduto id={produtoMostrado.id} img={produtoMostrado.img} nome={produtoMostrado.nome} desc={produtoMostrado.desc} preco={produtoMostrado.preco} onClose={() => setModalStatus(false)} /> : null}
            
        </section>
    )
}