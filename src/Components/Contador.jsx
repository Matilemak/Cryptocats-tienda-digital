import { useState } from "react"

const Contador = () => {
    const [Contador, setContador] = useState(0);

    return (
    <div>
        <button onClick={()=>setContador(Contador+1)}> Agregar al Carrito </button>
    </div>
    )
}

export default Contador;