import { CategoriasFakeDB } from "../../public/fakeDB/categorias";
import { supabase } from "../utils/supabase";
import CartaoCategoria from "./CartaoCategoria";

interface categoriaTypes {
  id: number;
  imgDesktop: string;
  imgTablet: string;
  imgMobile: string;
  nome: string;
}

interface dataTypes {
  data: categoriaTypes[] | null;
  error: object | null;
}

export default async function Categorias() {
  let categorias:categoriaTypes[] | null;

  let {data, error}:dataTypes = await supabase
    .from('categorias')
    .select('*')
 
  if (!error) {
    categorias = data;
  } else {
    console.log(data)
    console.log(error);
    categorias = CategoriasFakeDB;
  }

  return (
    <section className="px-7 md:px-10 lg:px-40 mt-6 md:mt-10 lg:mt-16">
      <h2 className="text-3xl text-primary-black text-center mb-8">Busque por categoria:</h2>
      <div className="grid grid-cols-2 gap-7 flex-wrap justify-between sm:grid-cols-3 lg:grid-cols-6">

        {categorias != null ? categorias.map((categoria) => {
          return (
            <CartaoCategoria
              id={categoria.id}
              key={categoria.id}
              imgDesktop={categoria.imgDesktop}
              imgTablet={categoria.imgTablet}
              imgMobile={categoria.imgMobile}
              nome={categoria.nome}
            />
          );
        }) : null}

      </div>
    </section>
  );
}
