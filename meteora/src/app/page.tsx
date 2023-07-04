import Carousel from "@/components/Carousel";
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
      <Carousel />
      {/* @ts-expect-error Async Server Component */}
      <Categorias />
      {/* @ts-expect-error Async Server Component */}
      <Produtos />
      <Facilidades />
      <FormCadastro />
      <Footer />
    </>
  )
}
