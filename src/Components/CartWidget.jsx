import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <div className="carrito-contenedor">
                <h3 className="carrito-texto">Carrito</h3>
                <p className="carrito-numero">0</p>
                <i className="bi bi-bag-fill"></i>
            </div>
        </div>
    )
}

export default CartWidget