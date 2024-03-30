import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { Cart } from "./componentes/Cart/Cart";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Contacto } from "./componentes/Contacto/Contacto";
import { CartContextProvider } from "./context/CartContext";
import { CheckOut } from "./componentes/CheckOut/CheckOut";
import { Footer } from "./componentes/Footer/Footer";

const App = () => {

  return(
    
    <>
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
     
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<CheckOut />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
    </>
      
      
    
  )
}

export default App;


