import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function P9(){

    const [inicio,setInicio]= useState(0);
    const [fim, setFim]= useState(0);
    const [resp, setResp]= useState(0);
    
 function contar(){
    
 while ( inicio <= fim ) {
	   inicio++;

 }

 
}
    return(
       
        <main className='mouse'>
                
            <h1>
                contar até
            </h1> 
            
            <input type='number' placeholder='de'  value={inicio} onChange={e => setInicio(Number(e.target.value))} />
                        
            <input type='number' placeholder='até'  value={fim} onChange={e => setFim(Number(e.target.value))} />
                        
                        <div>

                        {resp}
                        
                        </div>

                <button onClick={contar}>Calcular</button>
                <Link to={'/'}>home</Link>
          
        </main>
    )
}