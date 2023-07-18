import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";

interface FormularioCabecalhoPropTypes {
    aoEnviarFormulario: FormEventHandler;
    aoMudar: ChangeEventHandler;
    aoFocar: FocusEventHandler;
    valorBusca: string;
}

export default function FormularioCabecalho (props:FormularioCabecalhoPropTypes) {
    return (
        <form 
            className="md:pr-6 flex gap-3 py-6 bg-white sm:bg-inherit w-screen sm:w-auto justify-center"
            onSubmit={props.aoEnviarFormulario}
        >
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Digite o produto"
                className="px-4 text-primary-black border border-primary-black"
                value={props.valorBusca}
                onChange={props.aoMudar}
                onFocus={props.aoFocar}
            />
            <button 
                className="px-3 py-2 border border-primary-black md:border-white text-primary-black md:text-inherit"
                type="submit"
            >
                Buscar
            </button>
      </form>
    )
}