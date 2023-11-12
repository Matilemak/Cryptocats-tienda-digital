import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <a className="carrito-contenedor">
                <h3 className="carrito-texto">Carrito</h3>
                <p className="carrito-numero">0</p>
                <i className="bi bi-bag-fill"></i>
            </a>
        </div>
    )
}

export default CartWidget