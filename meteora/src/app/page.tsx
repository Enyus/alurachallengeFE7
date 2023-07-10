import Carousel from "@/components/Carousel";
import Categorias from "@/components/Categorias";
import Facilidades from "@/components/Facilidades";
import Footer from "@/components/Footer";
import FormCadastro from "@/components/FormCadastro";
import Header from "@/components/Header";
import Produtos from "@/components/Produtos";
import SearchProvider from "@/components/SearchProvider";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Carousel />
        <Categorias />
        <Produtos />
      </SearchProvider>
      <Facilidades />
      <FormCadastro />
      <Footer />
    </>
  )
}
