import { MouseEventHandler } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface modalProps {
  onClose: MouseEventHandler;
}

export default function ModalCadastro(props: modalProps) {
  return (
    <dialog
      open
      className="fixed top-0 left-0 right-0 p-1 pt-[15%] h-full w-full rounded-b overflow-y-scroll sm:px-[15%] bg-transparent sm:overflow-auto backdrop-brightness-50 z-10"
    >
      <div className="flex items-center bg-primary-black text-white text-xl rounded-t">
        <FaRegCircleCheck className="text-primary-yellow text-4xl m-4" />
        <span className="mr-auto">E-mail cadastrado com sucesso!</span>
        <button
          className="p-4 text-[#6C757D] font-bold"
          onClick={props.onClose}
        >
          X
        </button>
      </div>
      <div className="p-4 sm:flex bg-white">
        <span>Em breve você receberá novidades exclusivas da Meteora.</span>
      </div>
    </dialog>
  );
}
