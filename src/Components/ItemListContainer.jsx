import React, { useEffect, useState } from 'react'
import ItemList from './itemList'

const ItemListContainer = () => {

    const [list, setList] = useState ([])
    const url = '#'
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setList(data)
        })
    }, [])

    return (
        <div>
            <ItemList list={list} />
        </div>
    )
}

export default ItemListContainer