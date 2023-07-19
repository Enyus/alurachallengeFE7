import { supabase } from "../utils/supabase";
import dataProdutosTypes from "@/utils/dataProdutosTypes";

export default async function pesquisaPorCategoria(idCategoriaProcurada: string | number) {
    let {data, error}:dataProdutosTypes = await supabase
        .from('random_produtos')
        .select('*')
        .eq('categoriaId', idCategoriaProcurada)
        .limit(8)
    
    if (error) {
        console.log(error);
    }

    return data;
}