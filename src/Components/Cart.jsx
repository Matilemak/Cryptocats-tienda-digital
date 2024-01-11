import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart';
import {getFirestore, collection} from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer:{
            name: 'Matias',
            email: 'matias.alcayagac@gmail.com',
            addres: 'Calle falsa 123',
        },

        items: cart.map((product)=>({
            id: product.id,
            title: product.title,
            precio: product.precio,
            quantity: product.quantity,
        })),

        total: totalPrice(),
    };

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>Tu carrito esta vacío :c </p>
                <Link to="/">Ver productos</Link>
            </>
        );
    }

    return (
        <>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
        ))}
        <p>total: $ {totalPrice()}</p>
        
        <Link to="/checkout">
            {' '}
            <button onClick={handleClick} className="btn-total">Finalizar Compra</button>
        </Link>
        </>
    );
};

export default Cart;