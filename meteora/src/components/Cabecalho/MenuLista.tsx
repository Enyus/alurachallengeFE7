interface MenuListaTypes {
    exibicaoCelular: boolean;
    aoFechar?: ()=>void;
}

export default function MenuLista (props:MenuListaTypes) {
    let estiloLista:string = "hidden items-center gap-10 md:gap-4 md:flex";
    let estiloItem:string = "";

    if(props.exibicaoCelular) {
        estiloLista = "fixed top-0 right-0 bg-[#343A40] px-6 py-4 text-base items-center gap-10 md:gap-4 md:flex"
        estiloItem = "border-b-[1px] border-white py-2";
    };

    return (
        <nav className="mr-auto z-10">
          <ul className={estiloLista}>
            {props.exibicaoCelular ? <li className="text-primary-yellow font-bold text-right text-2xl sm:hidden" onClick={props.aoFechar}>X</li> : null}
            <li className={estiloItem + " text-primary-yellow"}>
                <a href="#">Home</a>
            </li>
            <li className={estiloItem}>
                <a href="#">Nossas lojas</a>
            </li>
            <li className={estiloItem}>
                <a href="#">Novidades</a>
            </li>
            <li className={props.exibicaoCelular ? "py-2" : ""}>
                <a href="#">Promoções</a>
            </li>
          </ul>
        </nav>
    )
};