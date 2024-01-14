import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart';
import {getFirestore, collection, addDoc} from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer:{
            name: 'Matias',
            email: 'matias.alcayagac@gmail.com',
            address: 'Calle falsa 123',
        },

        items: cart.map((product)=>({
            id: product.id,
            title: product.title,
            precio: product.price,
            quantity: product.quantity,
        })),

        total: totalPrice(),
    };

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => console.log(id));
    }

    if (cart.length === 0) {
        return (
            <>
                <p className='carrito-vacio'>Tu carrito esta vacío :c</p>
                <Link to='/' className='ver-productos'>Ver productos</Link>
            </>
        );
    }

    return (
        <>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
        ))}
        <p className='total-carrito'><strong>Total: $ {totalPrice()}</strong></p>
        
        <Link to='/checkout' className='btn-checkout'>
            {' '}
            <button onClick={handleClick} className="btn-total">Finalizar Compra</button>
        </Link>
        </>
    );
};

export default Cart;