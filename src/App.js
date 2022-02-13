import Navbar from './components/Navbar/Navbar';
import './App.css';
import FunctionCounter from './components/FunctionCounter/functionCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar title="LA TIENDA" color="black" />
      <ItemListContainer greeting='Hola Mundo' style={{textAlign: "center"}} />
      {/* <FunctionCounter /> */}
    </div>
    
  );
}

export default App;










