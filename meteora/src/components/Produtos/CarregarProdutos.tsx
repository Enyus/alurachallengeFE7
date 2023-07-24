import ListaProdutos from "./ListaProdutos";
import produtosTypes from "@/utils/produtosTypes";
import pesquisaGeral from "@/utils/pesquisaGeral";
import pesquisaPorString from "@/utils/pesquisaPorString";
import pesquisaPorCategoria from "@/utils/pesquisaPorCategoria";

export const revalidate = false;

export default async function CarregarProdutos (props: {pesquisa:string | number}) {
    let produtosLista: produtosTypes[] | null = null;
    let tituloListaProdutos = "Produtos que estão bombando!";

    switch (typeof (props.pesquisa)) {
        case "string":
            if (props.pesquisa == "") {
                produtosLista = await pesquisaGeral();
            } else {
                produtosLista = await pesquisaPorString(props.pesquisa);
                tituloListaProdutos = "Resultado da Pesquisa:"
            }
            break;
        case "number":
            if([1,2,3,4,5,6].some(element => element==props.pesquisa)) {
                produtosLista = await pesquisaPorCategoria(props.pesquisa);
                tituloListaProdutos = "Resultado da Pesquisa:"
            }
            break;
        default:
            break;
    }
    
    return (
        <section className="px-7 md:px-10 lg:px-40 mt-10 mb-10 lg:mb-20">
            <h2 className="text-3xl text-primary-black text-center mb-8">
                {tituloListaProdutos}
            </h2>
            <ListaProdutos produtos={produtosLista} />
        </section>
    )
}