import Carrossel from "@/components/Carrossel/Carrossel";
import Categorias from "@/components/Categorias/Categorias";
import Facilidades from "@/components/Facilidades";
import FormCadastro from "@/components/Cadastro/FormCadastro";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Produtos from "@/components/Produtos/Produtos";
import SearchProvider from "@/components/Contextos/SearchProvider";
import Rodape from "@/components/Rodape";

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
