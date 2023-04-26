import { useState, useEffect } from 'react'

const Contador = (props) => {

    const {initiaValue} = props

    const [numero, setnumero] = useState(initiaValue || 0)
    const [limitado, setLimitado] = useState(false)
    const [negativo, setNegativo] = useState(false)

    const sumar = () => setnumero(numero + 1);
    const restar = () => setnumero(numero - 1);
    const resetear = () => setnumero(0);
    
    useEffect(() => {

        if(numero >= 10){
            setLimitado(true)
        }

        return()=>{
            setLimitado(false)

            } 

    },[numero])


    useEffect(() => {

         if(numero <= 0){
        setNegativo(true)
         }

    return()=>{
        setNegativo(false)

        } 

},[numero])





    return (
        <div className = {`${limitado}`}>
            
            <h3 className='text-primary'>Cantidad:{numero}</h3>
            <div className='botones'>
                <div >
                    <button disabled={limitado} className='btn btn-success' onClick={sumar}>Agregar</button>
                </div>

                <div>
                    <button disabled={negativo} className='btn btn-danger' onClick={restar} >Quitar</button>
                </div>

                <div>
                    <button className='btn btn-info' onClick={resetear}>Cancelar</button>
                </div>
            </div>
        </div>


    )
}

export default Contador