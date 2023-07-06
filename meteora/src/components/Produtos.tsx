import { ProdutosFakeDB } from "../../public/fakeDB/produtos";
import { supabase } from "../utils/supabase";
import ListaProdutos from "./ListaProdutos";

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
    let produtosLista: produtosTypes[] | null;

    let {data, error}:dataTypes = await supabase
        .from('random_produtos')
        .select('*')
        .limit(8)

    // console.log(data)
    // console.log(error)
 
    if (!error) {
        produtosLista = data;
    } else {
        console.log(data)
        console.log(error);
        produtosLista = ProdutosFakeDB;
    }

    return (
        <section className="px-7 md:px-10 lg:px-40 mt-10 mb-10 lg:mb-20">
            <h2 className="text-3xl text-primary-black text-center mb-8">Produtos que estão bombando!</h2>
            <ListaProdutos produtos={produtosLista} />
        </section>
    )
}