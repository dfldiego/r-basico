import React, { Fragment } from 'react'

const Producto = ({ producto }) => {

    //Destructuring del props
    const { id, nombre, precio } = producto;

    return (
        <Fragment>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </Fragment>
    );
}

export default Producto;