import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({item}) => {

    return (
        <Link to={'/item/' + item.id} className='text-link'>
            <div className='Item-container'>
                <img src={item.imagen} alt={item.nombre} className='Item-imagen' />
                <div className='Item-body'>
                    <p>{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
};

export default Item;