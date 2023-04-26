import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/CartWidget/Cart';




const Container = () => {
  return (
    <div>
         <Navbar items={['Inicio', 'Menu', 'Eventos', 'Sobre Nosotros', 'Contacto']}/> 
         <Cart /> 
        
        
        
       
    </div>
    
  )
}

export default Container