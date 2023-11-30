import React from 'react'
import Card from './Card'

    const ItemList = ({list}) => {

        const listMap = list.map((cryptocat) => {
            const {name, id, image} = cryptocat;
            return <Card cryptocat={cryptocat} key={cryptocat.id} />;
        });

    return (
        <div>
            {listMap}
        </div>
    )
};

export default ItemList;