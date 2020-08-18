import React, { Fragment } from 'react'

const Producto = ({ producto }) => {

    //Destructuring del props
    const { id, nombre, precio } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        console.log("comprando.... ", id);
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