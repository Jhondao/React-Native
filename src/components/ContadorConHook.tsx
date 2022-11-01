import { useConunter } from '../hooks/useConunter';

export default function ContadorConHook() {

    const {valor, acumular} = useConunter(100);

  return (
    <>
        <h3>Contador con Hook: <small> {valor} </small></h3>

        <button className='btn btn-primary' onClick={ () => acumular(1)}>
            +1
        </button> &nbsp;
        <button className='btn btn-primary' onClick={ () => acumular(-1)}>
            -1
        </button>
    </>
  )
}
