import React from 'react';

const jsonProductos = ({id, img, title, price}) => {
    return (
        <div>
            <img src={img} alt={title} />
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{price}</p>
            <button onClick={() => setContador(Contador+1)}>Agregar al carrito</button>
        </div>
    )
}

export default jsonProductos;