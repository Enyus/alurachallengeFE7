import Image from "next/image";

export default function Header() {

    return (
      <header className="bg-primary-black text-primary-gray flex items-center h-16">
        <div className="relative h-8 w-36 ml-8 mr-10">
            <Image 
                alt="Logo da loja Meteora"
                src="/desktop/logo_desktop.png"
                fill
            />
        </div>

        <ul className="flex items-center gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">Nossas lojas</a></li>
            <li><a href="#">Novidades</a></li>
            <li><a href="#">Promoções</a></li>
        </ul>

        <div className="absolute right-0 mr-7 flex gap-3">
            <input type="text" name="search" id="search" placeholder="Digite o produto" className="px-4 text-primary-black"/>
            <button className="px-3 py-2 border border-white">Buscar</button>
        </div>
      </header>
    )
  }
  