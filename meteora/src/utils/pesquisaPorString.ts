import { supabase } from "../utils/supabase";
import dataProdutosTypes from "@/utils/dataProdutosTypes";

export default async function pesquisaPorString(stringProcurada: string | number) {
    let {data, error}:dataProdutosTypes = await supabase
        .from('random_produtos')
        .select('*')
        .ilike('nome', `%${stringProcurada}%`)
        .limit(8)
    
    if (error) {
        console.log(error);
    }

    return data;
}