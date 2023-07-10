'use client';

import { useContext } from "react";
import { SearchContext } from "./SearchProvider";
import CarregarProdutos from "./CarregarProdutos";

export default function Produtos () {
    const {search} = useContext(SearchContext);
    console.log(search);

    return (
        // <CarregarProdutos pesquisa={search} />
        <p>{search}</p>
    )
}