import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const ItemDetail = ({ item }) => {

    const[goToCart, setGoToCart] = useState(false);
    const{ addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    };

    return (
        <div className='row'>
            <img src={item.img} alt={item.title} className='item-detail-imagen' />
            <div className='producto'>
                <div className='detalle-producto'>
                    <h3 className='item-detail-title'>{item.title}</h3>
                    <p className='item-detail-precio'>Precio: $ {item.price}</p>
                    <p className='item-detail-stock'> Stock: {item.stock}</p>
                </div>
                <div>
                    {goToCart ? <Link to='/cart' className='btn-cart-compra'>Finalizar compra</Link> :<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;