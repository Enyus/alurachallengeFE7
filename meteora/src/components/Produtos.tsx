'use client';

import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

export default function Produtos () {
    const {search} = useContext(SearchContext);

    return (
        // <CarregarProdutos pesquisa={search} />
        <p>{search}</p>
    )
}