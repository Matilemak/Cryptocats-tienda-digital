import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const {id} = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'Productos', id);
        getDoc(queryDoc).then((res) => setItem({id: res.id, ...res.data()}))
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