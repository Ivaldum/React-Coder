import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BannerEnvio from "./components/BannerEnvio";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import NavBar from "./components/NavBar";


function App () {
    return(
        <BrowserRouter>
            <BannerEnvio/>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<ItemListContainer/>}/>
                <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                <Route path={"/product/:id"} element={<ItemDetailContainer/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;