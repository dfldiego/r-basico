import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // Crear listado de productos.
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  return (
    <Fragment>
      <Header
        titulo="Tienda Virtual"
      />

      <Footer />
    </Fragment>
  );
}

export default App;
