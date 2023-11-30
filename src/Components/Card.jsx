import React from 'react'

const Card = ({item}) => {
    const {name, image} = item

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="#" />
        </div>
    )
};

export default Card;