import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { Cart } from "./componentes/Cart/Cart";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  return(
    
    <>
    
    <BrowserRouter>
    <NavBar />
     <Routes>
     <Route path="/" element={<ItemListContainer />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/category/:category" element={<ItemListContainer />} />
     <Route path="/item/:id" element={<ItemDetailContainer />} />

      



     </Routes>

      
      </BrowserRouter>
    </>
      
      
    
  )
}

export default App;


