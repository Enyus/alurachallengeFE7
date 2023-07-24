import produtosTypes from "@/utils/produtosTypes";
import Image from "next/image";
import formatPreco from "../../../public/scripts/formatPreco";
import { MouseEventHandler } from "react";

export default function CartaoProduto(props: {produto: produtosTypes, aoClicar: MouseEventHandler<HTMLButtonElement> | undefined}) {
  return (
    <div
      className="w-full max-w-[350px] flex flex-col items-center"
    >
      <picture>
        <source srcSet={props.produto.imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={props.produto.imgTablet} media="(min-width: 768px)" />
        <Image
          src={props.produto.imgMobile}
          width={350}
          height={422}
          alt={props.produto.nome}
          className="object-fill"
        />
      </picture>
      <div className="m-4">
        <h3 className="font-bold mb-[15px]">{props.produto.nome}</h3>
        <p className="mb-[15px] text-[13px] text-secondary-black"> {props.produto.desc} </p>
        <span className="block font-bold mb-[10px]"> {formatPreco(props.produto.preco / 100)} </span>
        <button
          className="text-white bg-primary-purple px-4 py-2 font-medium"
          onClick={props.aoClicar}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}
