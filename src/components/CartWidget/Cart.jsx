import React from 'react'


const Cart = () => {
  return (
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a title="Crear Cuenta" class="nav-link active text-light" aria-current="page" href="#"><ion-icon name="person-add-outline"></ion-icon>
</a>
  </li>
  <li class="nav-item">
    <a title="Ingresar" class="nav-link active text-light" href="#"><ion-icon name="log-in-outline"></ion-icon>
</a>
  </li>
  <li class="nav-item">
      <a title="Mis Compras" class="nav-link active text-light" href="#"><ion-icon name="stats-chart-outline"></ion-icon>
</a>
  </li>
  <li class="nav-item ">
  <a title="Carrito" class="nav-link active text-light" href="#"><ion-icon name="cart-outline"></ion-icon>
  
</a>
  </li>
</ul>
  )
}

export default Cart