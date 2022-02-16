import Navbar from './components/Navbar/Navbar';
import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar title="LA TIENDA" color="black" />
      <ItemListContainer greeting='Hola Mundo' style={{textAlign: "center"}} />
      
    </div>
    
  );
}

export default App;










