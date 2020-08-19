import React, { Fragment } from 'react'
import './carrito.css';
import Producto from './Producto';

const Carrito = ({ carrito }) => (
    <Fragment>
        <div className="carrito">
            <h2>Tu carrito de Compras</h2>

            {carrito.length === 0
                ?
                <p>No hay elementos en el carrito</p>
                :
                carrito.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            }
        </div>
    </Fragment>
)

export default Carrito;