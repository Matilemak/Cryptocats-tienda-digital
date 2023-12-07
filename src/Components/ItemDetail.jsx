import React from 'react';
import Contador from './Contador';

const ItemDetail = ({item}) => {

    return (
        <div className='row'>
            <img src={item.imagen} alt={item.nombre} className='item-detail-imagen' />
            <div className='producto'>
                <div className='detalle-producto'>
                    <h3>{item.nombre}</h3>
                    <p>$ {item.precio}</p>
                </div>
                <div>
                    <button className='boton-producto' onClick={() => setContador(Contador+1)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;