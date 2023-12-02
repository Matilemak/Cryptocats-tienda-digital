import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonProductos from './jsonProductos.json'
import ItemList from './itemList'

const ItemListContainer = () => {

    const [item, setItem] = useState ([])
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve( id ? jsonProductos.filter(item => item.categoria === id) : jsonProductos)
                    }, 2000);
                });
                setItem(data);
            }catch(error){
                console.log('Error: ', error);
            }
        };
        fetchData();
    }, [id])

    return (
        <div className='container'>
            <div className='row'>
                <ItemList item={item} />
            </div>
        </div>
    )
}

export default ItemListContainer