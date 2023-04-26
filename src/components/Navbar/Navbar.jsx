import React from 'react'
import '../../styles/style.css'
import NavbarItem from './NavbarItem'


const Navbar = (props) => {
	console.log(props)



	return (

		<nav class="navbar sticky-top bg-body-tertiary opacity-50">
			<div class="container-fluid">
				<a class="navbar-brand text-dark fs-1" href="../app.js">McDowell’s</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						{props.items?.map((texto,index) =>(
							<NavbarItem key={index} texto ={texto}/>
						))}
						
						{/* { <NavbarItem NavbarItem={"Inicio"} />
						<NavbarItem NavbarItem={"Menu"}/>
						<NavbarItem NavbarItem={"Eventos"}/>
						<NavbarItem NavbarItem={"Sobre Nosotros"}/>
						<NavbarItem NavbarItem={"Contacto"}/> } */}
						
					</ul>
				</div>
			</div>
		</nav>

	)
}

export default Navbar