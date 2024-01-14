import React from 'react';
import { useCartContext } from './CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.img} alt={product.title} className='itemCart-img' />
            <div className='itemCart-detail'>
                <p className='itemCart-subdetail'>Título: <strong className='font-bold'>{product.title}</strong></p>
                <p className='itemCart-subdetail'>Cantidad: <strong className='font-bold'>{product.quantity}</strong></p>
                <p className='itemCart-subdetail'>Precio: <strong className='font-bold'>${product.price}</strong></p>
                <p className='itemCart-subdetail'>Subtotal: <strong className='font-bold'>${product.quantity * product.price}</strong></p>
            <button className='btn-eliminar' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default ItemCart;