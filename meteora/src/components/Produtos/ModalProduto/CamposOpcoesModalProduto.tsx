export default function CamposOpcoesModalProduto () {
    return (
        <>
            <fieldset>
                <legend className="text-[13px] pb-4 font-bold">Cores:</legend>
                <ul className="flex text-[13px] gap-4 pb-4 border-b border-primary-gray mb-4">
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corAzulClaro" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-blue-300 checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corAzulClaro">Azul Claro</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corOffWhite" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-white checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corOffWhite">Offwhite</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="radio" id="corPreto" name="cor" className="relative appearance-none h-4 w-4 rounded-[50%] border checked:bg-primary-purple checked:after:content-[''] checked:after:absolute checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-[50%] checked:after:bg-black checked:after:top-[3px] checked:after:left-[3px]" />
                        <label htmlFor="corPreto">Preto</label>
                    </div>
                </ul>
            </fieldset>
            <fieldset>
                <legend className="text-[13px] pb-4 font-bold">Tamanho:</legend>
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
            </fieldset>
        </>
    )
}