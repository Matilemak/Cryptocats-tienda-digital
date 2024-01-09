import React from 'react';
import {useCartContext} from './CartContext';


const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <div className="carrito-contenedor">
                <button>
                <h3 className="carrito-texto">Carrito</h3>
                <p className="carrito-numero">{totalProducts() || cart}</p>
                <i className="bi bi-bag-fill"></i>

                </button>
            </div>
        </div>
    )
}

export default CartWidget;