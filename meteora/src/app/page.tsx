import Banner from "@/components/Banner";
import Categorias from "@/components/Categorias";
import Facilidades from "@/components/Facilidades";
import Footer from "@/components/Footer";
import FormCadastro from "@/components/FormCadastro";
import Header from "@/components/Header";
import Produtos from "@/components/Produtos";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categorias />
      <Produtos />
      <Facilidades />
      <FormCadastro />
      <Footer />
    </>
  )
}
