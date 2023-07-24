import Image from "next/image";
import { MouseEventHandler } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import formatPreco from "../../../../public/scripts/formatPreco";
import produtosTypes from "@/utils/produtosTypes";
import CamposOpcoesModalProduto from "./CamposOpcoesModalProduto";

export default function ModalProduto(props: {produto: produtosTypes, onClose: MouseEventHandler}) {
  return (
    <dialog open className="fixed top-0 left-0 right-0 p-1 h-full w-full rounded overflow-y-scroll sm:py-4 sm:px-[10%] bg-transparent sm:overflow-auto z-10 backdrop-brightness-50">
      <div className="flex items-center bg-primary-black text-white text-xl rounded-t">
        <FaRegCircleCheck className="text-primary-yellow text-4xl m-4" />
        <span className="mr-auto">Confira detalhes sobre o produto</span>
        <button 
            className="p-4 text-[#6C757D] font-bold"
            onClick={props.onClose}
        >
            X
        </button>
      </div>

      <div className="p-4 sm:flex bg-white rounded-b">
        <Image
            src={props.produto.imgDesktop}
            width={350}
            height={422}
            alt={props.produto.nome}
            className="object-contain object-top w-full max-w-[500px] sm:w-1/2"
        />

        <form
            className="py-6 px-2 sm:w-1/2"
            onSubmit={(e)=>e.preventDefault()}
        >
            <h3 className="mb-6 font-bold">{props.produto.nome}</h3>
            <p className="text-[13px] pb-6 border-b border-black mb-6">{props.produto.desc}</p>
            <span className="block font-medium text-xl mb-6">{formatPreco(props.produto.preco / 100)}</span>
            <span className="block text-[13px] text-primary-gray pb-4 border-b border-primary-gray mb-4">Vendido e entregue por Riachuelo</span>
            
            <CamposOpcoesModalProduto />
            
            <button
                className="py-2 px-4 bg-primary-purple text-white"
                type="submit"
            >
                Adicionar à sacola
            </button>
        </form>

      </div>

    </dialog>
  );
}
