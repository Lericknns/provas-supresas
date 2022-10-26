import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function P1(){
    
    const [peq,setpeq]= useState(0) 
    const [med,setmed]= useState(0) 
    const [gra,setgra]= useState(0) 
    const [des,setdes]= useState(0) 
    const [resp,setResp]= useState(0) 
    
    function calcularAcai(){
        let a = ( peq * 13.50 ) + ( med * 15.00 ) + ( gra * 17.50 ); 
        
        let b = a * ( des / 100 ); 

        let c = a - b;
        
        setResp(c)

        
 
    }

    return(
       
        <main className='home'>

         <section>

            <h1>
                Total de venda Açai
            </h1>
                
                 <h2>
                    Quantidade Açai Pequeno
                 </h2>

                   <input     type='number'   value={peq}  onChange={e => setpeq(Number(e.target.value)) } />
                
                <h2>
                    Quantidade Açai Media
                </h2>
                
                    <input     type='number'   value={med}  onChange={e => setmed(Number(e.target.value)) } />
                
                <h2>
                    Quantidade Açai Grande
                </h2>

                    <input     type='number'   value={gra}  onChange={e => setgra(Number(e.target.value)) } />
                
                <h2>
                    Cupom de Desconto
                </h2>

                <input     type='number'   value={des}  onChange={e => setdes(Number(e.target.value)) } />
                
            
                    {resp}
                

                <button onClick={calcularAcai}>Somar</button>
                 
                <Link to={'/'}>home</Link>
            </section>

        </main>
    )
}
    