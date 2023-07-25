import Image from "next/image";

interface facilidadesTypes {
    id: number;
    imgDesktop: string;
    imgTablet: string;
    imgMobile: string;
    titulo: string;
    desc: string;
}

export default function Facilidade(props: {facilidade: facilidadesTypes}) {
    return (
        <div className="flex gap-6 w-[304px] items-center">
            <Image 
                src={props.facilidade.imgDesktop}
                alt={props.facilidade.titulo}
                width={72}
                height={73}
                className=""
            />
            <div className="flex flex-col justify-between">
                <span className="text-primary-yellow font-bold">{props.facilidade.titulo}</span>
                <p className="text-[13px]">{props.facilidade.desc}</p>
            </div>
        </div>
    )
}