'use client';

import { ReactNode, SetStateAction, createContext, useState } from "react";

interface CategoriaContextTypes {
    categoriaAtiva: number;
    setCategoriaAtiva: React.Dispatch<SetStateAction<any>>
}

export const CategoriaAtivaContext = createContext<CategoriaContextTypes>({
    categoriaAtiva: 0,
    setCategoriaAtiva: () => {},
});

export default function CategoriaAtivaProvider ( {children} : {children: ReactNode} ) {
    const [categoriaAtiva, setCategoriaAtiva] = useState(0);
    
    return (
        <CategoriaAtivaContext.Provider value={{categoriaAtiva, setCategoriaAtiva}}>
            {children}
        </CategoriaAtivaContext.Provider>
    )
};