import { facilidades } from "../../../public/fakeDB/facilidades";
import Facilidade from "./Facilidade";

export default function Facilidades () {

    return (
        <section className="w-full bg-primary-black text-white py-10 px-8 md:px-24 lg:px-60">
            <h2 className="text-center text-3xl mb-10">Conheça todas as nosas facilidades</h2>

            <div className="flex gap-8 max-lg:flex-wrap justify-center">
                
                { facilidades.map( facilidade => {
                    return (
                        <Facilidade 
                            key={facilidade.id}
                            facilidade={facilidade}
                        />
                    )
                })}

            </div>
        </section>
    )
}