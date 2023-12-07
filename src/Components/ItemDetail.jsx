import React from 'react';

const ItemDetail = ({item}) => {

    return (
        <div className='row'>
            <div className='col-md-3'>
                <img src={item.imagen} alt={item.nombre} className='item-detail-imagen' />
                <h3>{item.nombre}</h3>
                <p>$ {item.precio}</p>
            </div>
        </div>
    );
}

export default ItemDetail;