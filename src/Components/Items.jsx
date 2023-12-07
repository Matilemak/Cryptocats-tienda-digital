import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {

    return (
        <Link to={'/item/' + item.id} className='text-link'>
            <div className='item-container'>
                <img src={item.imagen} alt={item.nombre} className='item-imagen' />
                <div className='item-body'>
                    <h3>{item.nombre}</h3>
                    <p>$ {item.precio}</p>
                </div>
            </div>
        </Link>
    );
};

export default Items;