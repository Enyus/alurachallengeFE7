import produtosTypes from "./produtosTypes";

export default interface dataProdutosTypes {
    data: produtosTypes[] | null;
    error: object | null;
}