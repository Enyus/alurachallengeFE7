import Image from "next/image";

export default function Facilidades () {

    return (
        <section className="w-full bg-primary-black text-white py-10 px-8 md:px-24 lg:px-60">
            <h2 className="text-center text-3xl mb-10">Conheça todas as nosas facilidades</h2>

            <div className="flex gap-8 max-lg:flex-wrap justify-center">
                <div className="flex gap-6 w-[304px]">
                    <Image 
                        src='/desktop/icons/x-diamond.png'
                        alt="Aceitamos Pix"
                        width={72}
                        height={72}
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-between">
                        <p className="text-primary-yellow font-bold">PAGUE PELO PIX</p>
                        <p className="text-[13px]">Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </div>

                <div className="flex gap-6 w-[304px]">
                    <Image 
                        src='/desktop/icons/arrow-repeat.png'
                        alt="Troca Grátis"
                        width={72}
                        height={72}
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-between">
                        <p className="text-primary-yellow font-bold">TROCA GRÁTIS</p>
                        <p className="text-[13px]">Fique livre para trocar em até 30 dias.</p>
                    </div>
                </div>

                <div className="flex gap-6 w-[304px]">
                    <Image 
                        src='/desktop/icons/flower.png'
                        alt="Empresa Sustentável!"
                        width={72}
                        height={72}
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-between">
                        <p className="text-primary-yellow font-bold">SUSTENTABILIDADE</p>
                        <p className="text-[13px]">Moda responsável, que respeita o meio ambiente.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}