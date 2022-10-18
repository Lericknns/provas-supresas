import './index.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function P8(){
    
  
 
    const [inter,setInter]= useState(0);
    const [meia,setMeia]= useState(0);
    const [dia,setDia]= useState('');
    const [brasil,setBrasil]= useState('')
    const [resp,setResp]= useState('');

   
      
        function cine()
        {
            setInter(28,50)
            setMeia = (14,25) 
            let total 
    
            if(dia == 'quarta-feira'){
                Msg(14.25)
            }
            
            else
            { 
            
                if(brasil == true){
                Msg(5.00)
                }
                
                else{

                    if (inter + meia){
                        Msg(total)
                    }
            }
    
          
        } 
        setResposta(` ${Msg}`);
    }
    
        return(
       
            <main className="home">
               <section>
    
                    <div>
    
                        <h3> cinema </h3>
    
                        <select value={dia} onChange={e => setDia(e.target.value)}>
                            
                            <option>Selecione</option>
                            <option>Domingo</option>
                            <option>segunda</option>
                            <option>terça</option>
                            <option>quarta-feira</option>
                            <option>quinta</option>
                            <option>sexta</option>
                            <option>sabado</option>
                           
                        </select>

                        <select value={brasil} onChange={e => setBrasil(e.target.value)}>
                            
                            <option>Selecione</option>
                            <option>true</option>
                            <option>nâo</option>
                            
                           
                        </select>
    
                        <input type='number' placeholder="ingresso inteiro"  value={inter} onChange={e => setInter(Number(e.target.value))} />
                        <input type='number' placeholder="ingresso meia"  value={meia} onChange={e => setMeia(Number(e.target.value))} />
    
                        <button onClick={cine}>
                             Verificar
                        </button>
    
                        <div>
                            {resp}
                        </div>
                    </div>
                    <Link to={'/'}>home</Link>
                </section>
    
            </main>
        )
    }