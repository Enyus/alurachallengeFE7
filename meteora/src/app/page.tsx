import Carousel from "@/components/Carousel";
import Categorias from "@/components/Categorias";
import Facilidades from "@/components/Facilidades";
import Footer from "@/components/Footer";
import FormCadastro from "@/components/FormCadastro";
import Header from "@/components/Header";
import Produtos from "@/components/Produtos";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Categorias />
      <Produtos />
      <Facilidades />
      <FormCadastro />
      <Footer />
    </>
  )
}
