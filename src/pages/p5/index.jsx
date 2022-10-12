import './index.scss';
import { useState } from "react";

import { Link } from 'react-router-dom';

export default function P5(){
const [tanque, setTanque] = useState(0);
const [consumo, setConsumo] = useState(0);
const [distancia, setDistancia] = useState(0);
const [resp, setResp] = useState('');

    function Paradas() {
        let a = distancia / (tanque * consumo);
        setResp(Math.ceil(a));
    }



    
  
    return(
       
        <main className="home">
           
            <div >
                <h1>viagem de carro</h1>
            <div>
                   <h1>tanque</h1>
                    <input type="number" value={tanque} onChange={e => setTanque(Number(e.target.value))} />
                    <h1>consumo</h1>
                    <input type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
                    <h1>distancia</h1>
                    <input type="number" value={distancia} onChange={e => setDistancia(Number(e.target.value) )} />
                    <button onClick={Paradas}> Calcular </button>
                   
                    <p> {resp} </p>

                    <Link to={'/'}>home</Link>
            
            </div>
            </div>
           
        </main>
    )
}