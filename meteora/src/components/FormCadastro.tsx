"use client";

import { useState } from "react";
import ModalCadastro from "./ModalCadastro";

export default function FormCadastro () {
let [modalStatus, setModalStatus] = useState(false)
    return (
        <section className="p-7 sm:p-9 lg:py-16 lg:px-[25%]">
            <form className="p-6 border border-black">
                <p className="mb-6 text-center">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
                <div className="flex md:w-2/3 mx-auto">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Digite seu email" 
                        className="border border-black py-2 px-4 w-full"
                    />
                    <button
                        className="bg-primary-purple text-white px-4 py-2"
                        type="button"
                        onClick={()=>setModalStatus(true)}
                    >
                        Enviar
                    </button>
                </div>
            </form>

            {modalStatus ? <ModalCadastro onClose={() => setModalStatus(false)} /> : null}
        </section>
    )
}