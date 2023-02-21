import React from "react";
import { Header } from "./componentes/Header";
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import 'boxicons';
import {Dataprovider} from "./context/Dataprovider.js";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <Dataprovider>
    <div className="App">
    <Router>
    <Header />
    <Carrito />
    <Paginas />
    </Router>
    </div>
    </Dataprovider>
  );
}

export default App;
