import React from 'react';
import Items from './Items';

    const ItemList = ({items}) => {

    return (
        <div className='row'>
            {items.map((item) => (
                <div className='col-md-3' key={item.id}>
                    <Items item={item} />
                </div>
                ))}
        </div>
    );
}

export default ItemList;