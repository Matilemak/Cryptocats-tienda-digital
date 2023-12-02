import React from 'react'
import Card from './Card'

    const ItemList = ({item}) => {

    return (
        <div className='row'>
            {item.map(item => 
                <div className='col-md-3' key={item.id}>
                    <Card item={Card} />

                </div>
                )}
        </div>
    )
};

export default ItemList;