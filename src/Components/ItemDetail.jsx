import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { link } from 'react-router-dom';
import { userCartContext } from './CartContext';

const ItemDetail = ({item}) => {

    const[goToCart, setGoToCart] = useState(false);
    const{addProduct} = useCartContext()
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (
        <div className='row'>
            <img src={item.title} alt={item.title} className='item-detail-imagen' />
            <div className='producto'>
                <div className='detalle-producto'>
                    <h3>{item.title}</h3>
                    <p>$ {item.price}</p>
                    <p> Cantidad: {item.stock}</p>
                </div>
                <div>
                    {goToCart ? <Link to='/cart'>Finalizar compra</Link> :<ItemCount stock={10} initial={1} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;