import React from 'react';
import { useParams } from 'react-router-dom';

const MapasId = () => {

    const {id, name} = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
            <p>{name}</p>
        </div>
    )
}

export default MapasId;