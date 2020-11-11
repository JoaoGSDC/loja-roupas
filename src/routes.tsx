import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main";
import Cart from "./pages/Cart";
import Finished from "./pages/Finished";
import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Main} />
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/product" component={ProductDescription} />
            <Route path="/finish" component={Finished} />
        </BrowserRouter>
    );
}

export default Routes;