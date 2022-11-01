import { useState } from 'react';

export default function Contador() {

    const [valor, setfirst] = useState(10);

    const acumular = (numero:number) => {
        setfirst(valor + numero);
    }


  return (
    <>
        <h3>Contador: <small> {valor} </small></h3>

        <button className='btn btn-primary' onClick={ () => acumular(1)}>
            +1
        </button> &nbsp;
        <button className='btn btn-primary' onClick={ () => acumular(-1)}>
            -1
        </button>
    </>
  )
}
