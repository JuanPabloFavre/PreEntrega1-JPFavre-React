import { useState } from 'react'

const Contador = () => {

    const [numero, setnumero] = useState(0)

    const sumar = () => setnumero(numero + 1);
    const restar = () => setnumero(numero - 1);
    const resetear = () => setnumero(0);


    return (
        <div >
            
            <h3 className='text-primary'>Cantidad:{numero}</h3>
            <div className='botones'>
                <div >
                    <button className='btn btn-success' onClick={sumar}>Agregar</button>
                </div>

                <div>
                    <button className='btn btn-danger' onClick={restar} >Quitar</button>
                </div>

                <div>
                    <button className='btn btn-info' onClick={resetear}>Cancelar</button>
                </div>
            </div>
        </div>


    )
}

export default Contador