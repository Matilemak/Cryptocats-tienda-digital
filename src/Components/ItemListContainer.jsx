import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonjsonProductos from './jsonProductos.json';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [item, setItem] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve( id ? jsonjsonProductos.filter(item => item.categoria === id) : jsonjsonProductos)
                    }, 1000);
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