import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [items, setItem] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Productos');

        if(id){
            const queryFilter = query(queryCollection, where('category', '==', id));
            getDocs(queryFilter).then((res) => 
            setItem(res.docs.map((p) => ({id: p.id, ...p.data()})))
            );
        } else{
            getDocs(queryCollection).then((res) =>
            setItem(res.docs.map((p) =>({id: p.id, ...p.data()})))
            );
        }
    }, [id])

    return (
        <div className='container'>
            <div className='row'>
                <ItemList items={items} />
            </div>
        </div>
    );
}

export default ItemListContainer;