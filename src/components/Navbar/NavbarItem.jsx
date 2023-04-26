import React from 'react'

const NavbarItem = (props) => {

  return (
 
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">{props.texto}</a>
</li>

  )
}

export default NavbarItem