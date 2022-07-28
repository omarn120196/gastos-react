import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setmensaje] = useState('');

    const handlePresupuesto = e=>{
        e.preventDefault();
        
        if(!presupuesto || presupuesto <= 0){
            setmensaje('No es un presupuesto válido');
            return;
        }

        setmensaje('');
        setIsValidPresupuesto(true);
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            
            <form
                className="formulario" 
                action=""
                onSubmit={handlePresupuesto}
            >
                <div className="campo">
                    <label htmlFor="">
                        Definir presupuesto
                    </label>
                    <input 
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))} 
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && 
                    <Mensaje
                        tipo='error'
                    >
                        {mensaje}
                    </Mensaje>
                }
            </form>
        </div>
    )
}

export default NuevoPresupuesto