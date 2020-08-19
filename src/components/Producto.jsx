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

    //Elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id != id);

        //colocar los productos en el state
        setCarrito(productos);
    }

    return (
        <Fragment>
            <h2>{nombre}</h2>
            <p>${precio}</p>

            {productos
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar
                    </button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={() => eliminarProducto(id)}
                    >Eliminar
                    </button>
                )
            }
        </Fragment>
    );
}

export default Producto;