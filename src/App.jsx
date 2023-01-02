import { BrowserRouter, Route, Routes } from "react-router-dom";
import BannerEnvio from "./components/BannerEnvio";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart"

function App () {
    return(
        <CartContextProvider>
            <BrowserRouter>
                <BannerEnvio/>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<ItemListContainer/>}/>
                    <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                    <Route path={"/product/:id"} element={<ItemDetailContainer/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"*"} element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;