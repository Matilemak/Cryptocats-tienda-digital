import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonProductos from './jsonProductos.json'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(jsonProductos.find(item => item.id === parseInt(id)))
            }, 2000)
        });
        promesa.then((data) => 
        setItem(data))
    }, [id])

    return (
        <div className='container'>
            <div className='row'>
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer