import Image from "next/image"

export default function Categorias () {

    return (
        <section className="px-7 md:px-10 lg:px-40 mt-6 md:mt-10 lg:mt-16">
            <h2 className="text-3xl text-primary-black text-center mb-8">Busque por categoria:</h2>
            <div className="flex gap-7 flex-wrap justify-between">

                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_camiseta.png"
                        alt="Categoria camisetas"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Camisetas</p>
                </a>
                
                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_bolsa.png"
                        alt="Categoria bolsas"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Bolsas</p>
                </a>

                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_calçados.png"
                        alt="Categoria calçados"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Calçados</p>
                </a>

                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_calça.png"
                        alt="Categoria calças"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Calças</p>
                </a>

                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_casacos.png"
                        alt="Categoria casacos"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Casacos</p>
                </a>

                <a className="block w-36 md:w-52 lg:w-40" href="">
                    <Image 
                        src="/desktop/Categorias/categoria_óculos.png"
                        alt="Categoria óculos"
                        width={160}
                        height={157}
                        className="w-full"
                    />
                    <p className="bg-primary-black text-white h-[35px] flex items-center justify-center">Óculos</p>
                </a>

            </div>
        </section>
    )
}