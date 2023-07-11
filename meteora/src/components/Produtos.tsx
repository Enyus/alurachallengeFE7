'use client';

import { Suspense, useContext } from "react";
import CarregarProdutos from "./CarregarProdutos";
import { SearchContext } from "./SearchProvider";

export default function Produtos () {
    const {search} = useContext(SearchContext);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <CarregarProdutos pesquisa={search} />
        </Suspense>
    )
}