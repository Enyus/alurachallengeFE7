import Carrossel from "@/components/Carrossel";
import Categorias from "@/components/Categorias/Categorias";
import Facilidades from "@/components/Facilidades";
import FormCadastro from "@/components/FormCadastro";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Produtos from "@/components/Produtos";
import SearchProvider from "@/components/Contextos/SearchProvider";
import Rodape from "@/components/Rodape";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <SearchProvider>
        <Cabecalho />
        <Carrossel />
        <Categorias />
        <Produtos />
      </SearchProvider>
      <Facilidades />
      <FormCadastro />
      <Rodape />
    </>
  )
}
