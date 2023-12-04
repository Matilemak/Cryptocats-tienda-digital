import { useState } from "react"

const Contador = () => {
    const[contador, setContador] = useState(0);

    return (
    <div>
        <button onClick={()=>setContador(contador+1)}> Agregar al Carrito </button>
    </div>
    )
}

export default Contador;