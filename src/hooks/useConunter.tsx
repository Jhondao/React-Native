import { useState } from 'react';

export const useConunter = ( inicial:number = 10 ) => {
  
    const [valor, setfirst] = useState(inicial);

    const acumular = (numero:number) => {
        setfirst(valor + numero);
    }

    return {
        valor,
        acumular
    }

}
