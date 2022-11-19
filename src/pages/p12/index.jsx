import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { gerar } from './service';

export default function P11(){
     
    const [numero,setNumero]= useState(0);
    const [ chances,setChance ]= useState(0) 
    const [resp, setResp]= useState('');

   

    
    function chutes(){
        let x = gerar       
        chances = 10;

        if(resp = 'é menor'){
        
           setChance = chances -1
        }
        else if(resp = 'é maior'){
         setChance = chances - 1
           }
        
        else if (resp = 'acertou') {
            chances = 10 && (parseInt(Math.random() * 1000))
        }
        
        else if(chances == 0){
             ( parseInt(Math.random() * 1000) && (chances = 10))
         }

    if(numero > x){
        setResp=('é maior')
    }

    else if(numero < x){ 
        setResp=('é menor')
    }

    else {
        setResp=('acertou') 
    }   
}
    
        return(
       
        <main className='mouse'>
                
            
      <section> 
        <header className="App-header">
        
          <button onClick={gerar}> começar </button>
    
          <input type= 'number' value={numero} onChange={e => setNumero(e.target.value)} />

        <button onClick={chutes}> Calcular </button>
         <div>
            {resp}
        </div>
        
      </header>
      </section>
    
      <Link to={'/'}>home</Link>
    
          
        </main>
    )
    
            
       }

  
    
   

    

    