// import logo from './logo.svg';
import { Fragment, useState } from 'react'; // todos los hooks empiezan con use
import './App.css';


function App() {
  // let displayName = "Invitado";

  // const [value, updateFunc] = useState("defaultValue");
  const [displayName, setDisplayName] = useState("Invitado");
  const [gameState, setGameState] = useState(new Array(9).fill(null));

  const login = () => {
    // displayName = "Dannaé"
    setDisplayName("Dannaé")
    console.log(displayName);
  }
  return (
    <div className="App">
      Bienvenido, {displayName}
      <p>
        <button onClick={login}>
          Log In
        </button>
      </p>

      <main>
      {/* Cuando un componente no tiene hijo, se puede hacer un self closing tag */}
        <Tile/>
      </main>
    </div>
  );
}
// todos los componentes funcionales son funciones pero no viceversa
// Para que una funcion sea un componente:
// nombres Capitalizados
// retorna JSX
function Tile() {
  return ( 
    // <Fragment>  </Fragment> === <>  </>  = componente de react vacio
    <button className='tile'> 
      X 
    </button>
  );
}


export default App;
