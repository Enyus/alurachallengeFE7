import Image from "next/image";
import { MouseEventHandler } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import formatPreco from "../../public/scripts/formatPreco";

interface modalProps {
  id: number;
  nome: string;
  desc: string;
  preco: number;
  img: string;
  onClose: MouseEventHandler;
}

export default function ModalProduto(props: modalProps) {

  return (
    <dialog open className="fixed top-0 left-0 right-0 p-1 h-screen rounded-b overflow-y-scroll sm:w-3/4 sm:my-4 bg-transparent sm:overflow-auto">
      <div className="flex items-center bg-primary-black text-white text-xl rounded-t">
        <FaRegCircleCheck className="text-primary-yellow text-4xl m-4" />
        <p className="mr-auto">Confira detalhes sobre o produto</p>
        <button 
            className="p-4 text-[#6C757D] font-bold"
            onClick={props.onClose}
        >
            X
        </button>
      </div>
      <div className="p-4 sm:flex bg-white">
        <Image
          src={props.img}
          width={350}
          height={422}
          alt={props.nome}
          className="object-fill w-full sm:w-1/2"
        />
        <div className="py-6 px-2 sm:w-1/2">
            <h3 className="mb-6 font-bold">{props.nome}</h3>
            <p className="text-[13px] pb-6 border-b border-black mb-6">{props.desc}</p>
            <p className="font-medium text-xl mb-6">{formatPreco(props.preco / 100)}</p>
            <p className="text-[13px] text-primary-gray pb-4 border-b border-primary-gray mb-4">Vendido e entregue por Riachuelo</p>
            <div>
                <p className="text-[13px] pb-4 font-bold">Cores:</p>
                <ul className="flex text-[13px] gap-4 pb-4 border-b border-primary-gray mb-4">
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corAzulClaro" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border bg-blue-300 checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-blue-300 checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corAzulClaro">Azul Claro</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corOffWhite" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border bg-white checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corOffWhite">Offwhite</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corPreto" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border bg-black checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-black checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corPreto">Preto</label>
                    </div>
                </ul>
            </div>
            <div>
                <p className="text-[13px] pb-4 font-bold">Tamanho:</p>
                <ul className="flex text-[13px] gap-4 pb-4 border-b border-primary-gray mb-4 text-center">
                    <div className="flex flex-col items-center">
                        <input type="radio" id="tamanhoP" name="tamanho" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:z-10 checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="tamanhoP">P</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="tamanhoPP" name="tamanho" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:z-10 checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="tamanhoPP">PP</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="tamanhoM" name="tamanho" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:z-10 checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="tamanhoM">M</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="tamanhoG" name="tamanho" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:z-10 checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="tamanhoG">G</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="tamanhoGG" name="tamanho" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:z-10 checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="tamanhoGG">GG</label>
                    </div>
                </ul>
            </div>
            
            <button
                className="py-2 px-4 bg-primary-purple text-white"
            >
                Adicionar à sacola
            </button>
        </div>
      </div>
    </dialog>
  );
}
