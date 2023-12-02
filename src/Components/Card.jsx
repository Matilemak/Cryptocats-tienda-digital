import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({item}) => {

    return (
        <Link to={'/item/ + item.id'} className='text-link'>
            <div className='card-container'>
                <img src={item.imagen} alt={item.nombre} className='card-imagen' />
                <div className='card-body'>
                    <p>{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
};

export default Card;