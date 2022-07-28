import { useState } from 'react';
import { generarID } from './helpers';
import Header from './components/Header';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import ListadoGastos from './components/ListadoGastos';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = ()=>{
    setModal(true);
    
    setTimeout(()=>{
      setAnimarModal(true);
    }, 300);
  }

  const guardarGasto = gasto =>{
    gasto.id = generarID();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);

    setTimeout(()=>{
        setModal(false);
    }, 300);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && 
        (
          <>
            <main>
              <ListadoGastos
                gastos={gastos}
              />
            </main>

            <div className='nuevo-gasto'>
              <img 
                src={IconoNuevoGasto} 
                alt="Icono Nuevo Gasto"
                onClick={handleNuevoGasto} 
              />
            </div>
          </>
          
        )
      }

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      }
      
    </div>
  )
}

export default App
