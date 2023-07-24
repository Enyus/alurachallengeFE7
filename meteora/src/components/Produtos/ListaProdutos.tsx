'use client';

import { useState } from "react";
import ModalProduto from "./ModalProduto/ModalProduto";
import produtosTypes from "@/utils/produtosTypes";
import CartaoProduto from "./CartaoProduto";

export default function ListaProdutos (props: { produtos: produtosTypes[] | null; }) {
    let [modalStatus, setModalStatus] = useState(false);
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

    return (
        <>
            <div className="grid grid-cols-1 flex-wrap gap-3 justify-between sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >

                {props.produtos != null ? props.produtos.map( produto => {
                    return (
                        <CartaoProduto 
                            key={produto.id}
                            produto={produto}
                            aoClicar={() => {
                                setProdutoMostrado(produto);
                                setModalStatus(true);
                            }}
                        />
                    )
                }) : null}

            </div>
            
            {modalStatus ? 
                <ModalProduto 
                    produto={produtoMostrado}
                    onClose={() => setModalStatus(false)} 
                /> 
                : null}
        </>
    )
};
