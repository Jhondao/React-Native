import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
      //Llamado al API
      reqResAPI.get<ReqResListado>('/users')
            .then( resp => {
                console.log(resp.data.data);
            })
            .catch(console.log)
    }, [])
    


  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </>
  )
}
