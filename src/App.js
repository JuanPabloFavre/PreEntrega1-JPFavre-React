import './App.css';
import './styles/style.css';
import Container from './Layout/Container'
import Logo from './components/Logo'
import hambur1 from './assets/hambur1.png' 
import hambur2 from './assets/hambur2.png' 
import promo1 from './assets/promo1.png' 
import combo2 from './assets/combo2.png' 
import Card from './components/Card/Card';








function App() {

  const contenido = [
    {
      Titulo: 'Big Mak',
      Detalle: 'Doble Carne, Pepinillos y vegetales',
      Imagen: hambur1,
      Precio: "$520"
    },

    {
      Titulo: 'Americana',
      Detalle: 'Carne 250g, Panzeta, Cheddar',
      Imagen: hambur2,
      Precio: "$580"
    },

    {
      Titulo: 'King x2',
      Detalle: 'Doble queso, huevo y Panzeta',
      Imagen: promo1,
      Precio: "$730"
    },

    {
      Titulo: 'Combo Best',
      Detalle: 'Carne 300g y Papas',
      Imagen: combo2,
      Precio: "$620"
    }
 
  ]
  return (
    
    <div className="App">
        <Logo/>
        <Container/>
       
        <div className='articulos'>
        {contenido.map((comida,index) =>(
          <Card key={index} Titulo={comida.Titulo} Detalle={comida.Detalle} Imagen={comida.Imagen} Precio={comida.Precio}/>
          ))}
          </div>
                     
    </div>
    
  
  );
}

export default App;
