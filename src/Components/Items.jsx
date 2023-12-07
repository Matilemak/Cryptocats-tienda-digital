import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {

    return (
        <Link to={'/item/' + item.id} className='text-link'>
            <div className='item-container'>
                <div className='item-body'>
                    <img src={item.imagen} alt={item.nombre} className='item-imagen' />
                    <h3>{item.nombre}</h3>
                    <p>$ {item.precio}</p>
                </div>
            </div>
        </Link>
    );
};

export default Items;