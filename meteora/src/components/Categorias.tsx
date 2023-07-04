import Image from "next/image";
import {supabase} from "../utils/supabase"
import { CategoriasFakeDB } from "../../public/fakeDB/categorias";

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

    console.log(data)
    console.log(error)
 
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
            <button className="block w-full max-w-[160px]" key={categoria.id}>
              <picture>
                <source srcSet={categoria.imgDesktop} media="(min-width: 1024px)" />
                <source srcSet={categoria.imgTablet} media="(min-width: 768px)" />
                <Image
                  src={categoria.imgMobile}
                  alt={`Categoria ${categoria.nome}`}
                  width={160}
                  height={157}
                  className="object-fill w-full"
                />
              </picture>
              <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">{categoria.nome}</p>
            </button>
          );
        }) : null}

      </div>
    </section>
  );
}
