import { useState } from 'react';
import { useCartContext } from './CartContext';
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';

export const CheckOut = () =>{
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');

    const {cart, totalPrice, removeProduct} = useCartContext();

    const manejadorFormulario = (event) =>{
    event.preventDefault();
    

    if(!nombre || !apellido || !telefono || !email ||!emailConfirmacion ){
        setError('Por favor complete todos los campos requeridos');
        return;
        }

    if( email !== emailConfirmacion){
        setError('Los email no coinciden');
        return;
        }


    const total = totalPrice();
    const orden ={
        items: cart.map((producto)=>({
            id: producto.id,
            nombre: producto.title,
            cantidad: producto.quantity,
        })),
    total: total,
    fecha: new Date(),
    nombre,
    apellido,
    telefono,
    email,
    };

    Promise.all(
        orden.items.map(async (productoOrden)=>{
                const db = getFirestore();
                const productoRef = doc(db, 'Productos', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc( productoRef, {
                stock: stockActual - productoOrden.cantidad,
                });
        })
    )
    .then(()=>{
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
        .then((docRef)=>{
        setOrdenId(docRef.id);
        removeProduct();
        })
    .catch((error)=>{
        console.log('No se pudo crear la orden', error);
        setError('Error en la orden');
        });
    })
    .catch((error)=>{
        console.log('No se puede actualizar el stock', error);
        setError('No se actualizo el stock');
    });    
    
    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
    setMensaje('');
    
};
    return(
        <div>
            <h2 className='form-titulo'> Complete el formulario para confirmar la compra.</h2>
        <div className='form-cont'>
            <div className='detalleOrden-cont'>
                <h3 className='detalleOrden-titulo'>Detalle de la orden</h3>
            {cart.map((producto)=>(
                <div className='cart-detail' key={producto.id}>
                    <p className='cartItem-checkout'>{''} {producto.title}</p>
                    <p className='cartItem-checkout'>Cantidad: {producto.quantity}</p>
                    <p className='cartItem-checkout'>Precio: {producto.price}</p>
                </div>
            ))}
            </div>

            <form onSubmit={manejadorFormulario} className='form-container'>
                <div className='formulario'>
                    <div>
                        <label className="lab-check">Nombre:</label>
                            <input className="input-check" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div>
                        <label className="lab-check">Apellido:</label>
                            <input className="input-check" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label className="lab-check">Telefono:</label>
                            <input className="input-check" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div>
                        <label className="lab-check">Email:</label>
                            <input className="input-check" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label className="lab-check">Confirmar email</label>
                            <input className="input-check" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>


                    {error && <p>{error}</p>}
                        <div>
                            <button type="submit" className='btn-enviar'> Enviar </button>
                        </div>
                    {ordenId && (
                        <p className='checkout-orden'> ¡Gracias por tu compra! :) 
                            Tu numero de seguimiento es: <br/> {''} {ordenId} {''} <br/></p>
                        )}
                </div>
            </form>
        </div>
        </div>
    );
}

export default CheckOut;