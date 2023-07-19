import { CategoriasFakeDB } from "../../../public/fakeDB/categorias";
import { supabase } from "../../utils/supabase";
import CategoriaAtivaProvider from "../Contextos/CategoriaAtivaProvider";
import CartaoCategoria from "./CartaoCategoria";
import categoriaTypes from "@/utils/categoriaTypes";
import dataCategoriaTypes from "@/utils/dataCategoriaTypes";

export default async function Categorias() {
  let categorias:categoriaTypes[] | null;

  let {data, error}:dataCategoriaTypes = await supabase
    .from('categorias')
    .select('*')
 
  if (!error) {
    categorias = data;
  } else {
    console.log(error);
    categorias = CategoriasFakeDB;
  }

  return (
    <section className="px-7 md:px-10 lg:px-40 mt-6 md:mt-10 lg:mt-16">
      <h2 className="text-3xl text-primary-black text-center mb-8">Busque por categoria:</h2>
      <div className="grid grid-cols-2 gap-7 flex-wrap justify-between sm:grid-cols-3 lg:grid-cols-6">
      <CategoriaAtivaProvider>
        {categorias != null ? categorias.map((categoria) => {
          return (
            <CartaoCategoria
              propsCategoria = {categoria}
              key={categoria.id}
            />
          );
        }) : null}
      </CategoriaAtivaProvider>

      </div>
    </section>
  );
}
