import './index.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function P8(){
    
  
 
    const [inter,setInter]= useState(0);
    const [meia,setMeia]= useState(0);
    const [dia,setDia]= useState('');
    const [brasil,setBrasil]= useState('')
    const [resp,setResp]= useState(0);

   
      
        function cine()
        
       
        { 
            let meia = 14.25;
            let inter = 28.50;
        
            if (brasil == 'sim'){
                    setResp(5.00)
                }
            
            else if (dia == 'quarta-feira'){
                setResp(14.25)
            }
             
            
                
                
                else{
                    setResp(inter + meia )
            }
    
          
         
    }
    
        return(
       
            <main className="home">
               <section>
    
                    <div>
    
                        <h3> cinema </h3>
    
    <h1>dia da semana
    </h1>
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

<h1>é nacional</h1>
                        <select value={brasil} onChange={e => setBrasil(e.target.value)}>
                            
                            <option>Selecione</option>
                            <option>sim</option>
                            <option>
                             não  
                            </option>
                            
                           
                        </select>
                        <h1>inteiro</h1>
                        <input type='number' placeholder='ingresso inteiro'  value={inter} onChange={e => setInter(Number(e.target.value))} />
                        
                        <h1>Meia</h1>
                        <input type='number' placeholder='ingresso meia'value= {meia} onChange={e => setMeia(Number(e.target.value))} />
     
     <div>
                            {resp}
                        </div>
                        <button onClick={cine}>
                             Verificar
                        </button>
    
                       
                    </div>
                    <Link to={'/'}>home</Link>
                </section>
    
            </main>
        )
    }