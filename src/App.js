import { useState } from 'react';
import Input from './components/Input'
import Boton from './components/Boton'

function App() {
  const [estado, setEstado] = useState('');

  return (

    <div className="App">
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input estado={estado} setEstado={setEstado}/>
      {estado === "252525" && <Boton />}
    </div>
  );
}

export default App;
