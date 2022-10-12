import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function P3(){

    const [gramas,setGramas]= useState(0);
    const [resp, setResp]= useState(0);
    

    function grama(){
        
        let x = gramas * 3.50;

        if(gramas>=1000){
           
            x = gramas * 3.00
        }
        if (gramas==0) {
            x = 'Preço invalido'
        }     

        setResp(x)
    }
  
    return(
       
        <main className='home'>
            
            <div>
            
            <h1>
                Calcular gramas
            </h1>
             
                <input type='number'value={gramas}onChange={e => setGramas(Number(e.target.value)) } />
                <div>
                    {resp}
                </div>
                
                <button onClick={grama}>Calcular</button>
                <Link to={'/'}>home</Link>

            </div>
          
        </main>
    )
}