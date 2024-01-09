import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {

    return (
        <Link to={'/item/' + item.id} className='text-link'>
            <div className='item-container'>
                <div className='item-body'>
                    <img src={item.img} alt={item.title} className='item-imagen' />
                    <h3>{item.title}</h3>
                    <p>$ {item.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Items;