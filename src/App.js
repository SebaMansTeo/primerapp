import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"
import { NotificationServicesProvider } from "./services/notifications/NotificationServices"


function App() {
  return (
    <div>
      <NotificationServicesProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar title="TIENDA DE DISEÑO" color="black" />
            <Routes>
              <Route path='/' element={<ItemListContainer style={{textAlign: "center"}} />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer style={{textAlign: "center"}} />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>
    
  );
}

export default App;










