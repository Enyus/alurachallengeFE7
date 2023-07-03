import { MouseEventHandler } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface modalProps {
  onClose: MouseEventHandler;
}

export default function ModalCadastro(props: modalProps) {
  return (
    <dialog
      open
      className="fixed top-0 left-0 right-0 px-1 py-60 h-screen rounded-b overflow-y-scroll sm:w-3/4 sm:my-4 bg-transparent sm:overflow-auto"
    >
      <div className="flex items-center bg-primary-black text-white text-xl rounded-t">
        <FaRegCircleCheck className="text-primary-yellow text-4xl m-4" />
        <p className="mr-auto">E-mail cadastrado com sucesso!</p>
        <button
          className="p-4 text-[#6C757D] font-bold"
          onClick={props.onClose}
        >
          X
        </button>
      </div>
      <div className="p-4 sm:flex bg-white">
        <p>Em breve você receberá novidades exclusivas da Meteora.</p>
      </div>
    </dialog>
  );
}
