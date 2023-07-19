import { supabase } from "../utils/supabase";
import dataProdutosTypes from "@/utils/dataProdutosTypes";

export default async function pesquisaGeral () {
    let {data, error}:dataProdutosTypes = await supabase
        .from('random_produtos')
        .select('*')
        .limit(8)
    
    if (error) {
        console.log(error);
    }

    return data ;
}