import React from 'react';

const jsonProductos = ({id, imagen, nombre, precio}) => {
    return (
        <div>
            <img src={imagen} alt={nombre} />
            <p>{id}</p>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <button onClick={() => setContador(contador+1)}>Agregar al carrito</button>
        </div>
    )
}

export default jsonProductos;