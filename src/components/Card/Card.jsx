import React from 'react'
import Contador from '../Counter/Contador'


const Card = (props) => {
    const{Titulo, Detalle,Imagen,Precio} = props
    return (

        <div className="card" style={{width: '18rem'}}>
            <img src={Imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{Titulo}</h5>
                    <p className="card-text">{Detalle}</p>
                    <p className="card-text">{Precio}</p>
                    <Contador/>

                </div>
        </div>

    )
}

export default Card