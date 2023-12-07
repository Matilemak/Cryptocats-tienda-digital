import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import jsonProductos from './jsonProductos.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                const foundItem = jsonProductos.find((item) => item.id === id);
                resolve(foundItem);
            }, 1000)
        });
        promesa.then((data) => {
            setItem(data);
        }); 
    }, [id]);

    return (
        <div className='item-detail-container'>
            <div className='item-detail-body'>
                <ItemDetail item={item} />
            </div>
        </div>
    );
};

export default ItemDetailContainer;