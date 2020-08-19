import React, { Fragment } from 'react'

const Producto = ({ producto, carrito, productos, setCarrito }) => {

    //Destructuring del props
    const { id, nombre, precio } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        //console.log(producto);
        setCarrito([...carrito, producto]);
    }

    return (
        <Fragment>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button
                type="button"
                onClick={() => seleccionarProducto(id)}
            >
                Comprar
            </button>
        </Fragment>
    );
}

export default Producto;