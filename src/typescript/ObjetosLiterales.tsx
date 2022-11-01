
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

//Se usa cuando se tiene un objeto anidado
interface Direccion{
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Jhon',
        edad: 23,
        direccion:{
            pais: 'Colombia',
            casaNo: 49
        }
    }


  return (
    <>
        <h3> Objetos Literales </h3>
        { JSON.stringify(persona, null, 2)}
    </>
  )
}
