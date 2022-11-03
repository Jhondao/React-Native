import { useState, useRef, useEffect } from 'react';
import { Usuarios } from '../components/Usuarios';
import { reqResAPI } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
    
    const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(0);

    useEffect(() => {
      //Llamado al API
      cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResAPI.get<ReqResListado>('/users', {
            params: {
                //current es la refencia al valor de paginaRef
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
            paginaRef.current ++;            
        }else{
            alert('No hay más registros')
        }

    }

    return{
        Usuarios,
        cargarUsuarios
    }
    
}
