import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar title="TIENDA DE DISEÑO" color="black" />
        <Routes>
          <Route path='/' element={<ItemListContainer style={{textAlign: "center"}} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer style={{textAlign: "center"}} />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;










