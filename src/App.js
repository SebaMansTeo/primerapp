import Navbar from './components/Navbar/Navbar';
import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <Navbar title="LA TIENDA" color="black" />
      <ItemListContainer greeting='Hola Mundo' style={{textAlign: "center"}} />
      <ItemDetailContainer />
    </div>
    
  );
}

export default App;










