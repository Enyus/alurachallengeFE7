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

export default async function CarregarProdutos (props: {pesquisa:string | number}) {
    let produtosLista: produtosTypes[] | null = ProdutosFakeDB;
    console.log(`A pesquisa é: ${props.pesquisa}`);

    // switch (typeof (props.pesquisa)) {
    //     case "string":
    //         if (props.pesquisa == "") {
    //             pesquisaGeral();
    //         } else {
    //             pesquisaPorString(props.pesquisa);
    //         }
    //         break;
    //     case "number":
    //         if([1,2,3,4,5,6].some(element => element==props.pesquisa)) {
    //             pesquisaPorCategoria(props.pesquisa);
    //         }
    //         break;
    //     case undefined:
    //         console.log(props.pesquisa);
    //         break;
    //     default:
    //         break;
    // }

    async function pesquisaGeral () {
        let {data, error}:dataTypes = await supabase
            .from('random_produtos')
            .select('*')
            .limit(8)
        
        if (!error) {
            produtosLista = data;
        } else {
            console.log(error);
        }
    }

    async function pesquisaPorString(stringProcurada: string | number) {
        let {data, error}:dataTypes = await supabase
            .from('random_produtos')
            .select('*')
            .ilike('nome', `%${stringProcurada}%`)
            .limit(8)
        
        if (!error) {
            produtosLista = data;
        } else {
            console.log(error);
        }
    }

    async function pesquisaPorCategoria(idCategoriaProcurada: string | number) {
        let {data, error}:dataTypes = await supabase
            .from('random_produtos')
            .select('*')
            .eq('id', idCategoriaProcurada)
            .limit(8)
        
        if (!error) {
            produtosLista = data;
        } else {
            console.log(error);
        }
    }

 
    return (
        <section className="px-7 md:px-10 lg:px-40 mt-10 mb-10 lg:mb-20">
            <h2 className="text-3xl text-primary-black text-center mb-8">Produtos que estão bombando!</h2>
            <ListaProdutos produtos={produtosLista} />
        </section>
    )
}