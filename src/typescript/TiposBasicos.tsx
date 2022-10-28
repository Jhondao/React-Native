
export const TiposBasicos = () => {

    const nombre  = "Jhon";
    const edad = 35;
    const estaActivo:boolean = false;

    //Arreglo de stings 
    const poderes: string[] = [];

    poderes.push("Hola mundo");
    poderes.push("Hola bebe");
    
    

  return (
    <>
        <h3>Tipos básicos</h3>
        { nombre }, { edad }, {(estaActivo) ? 'Actvio' : 'no activo'}
        <br />
        { poderes.join(' , ')}
    </>
  )
}
