import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gif from '../../assets/images/emoji-emoji-disintegrating.gif'

export default function P7(){

    const [ganhos, setGanho]= useState(0);
    const [gastos,setGastos]= useState(0);
    const [resposta,setResposta]= useState(0);
   
    function calcular(){
      let Msg 

    if (gastos > ganhos){
      Msg = <div>
        <h1>devendo</h1>
        <img src={Gif} alt="loading..."/>
      </div>
    
        

    }

    else if(ganhos > gastos){
        Msg = ('orçamento ok')
    }

    else{Msg = ('Orçamento comprometido,reveja seus gastos')}
 
     setResposta(Msg);
    
 }
 
     return(
         <main className="home">
             <section>
             
                <h1>Calcular gastos</h1>
 
             <div>   
                 <h3>Digite seus ganhos</h3>
                 <input type='text' value={ganhos} onChange={e => setGanho(Number(e.target.value))}     />
             
 
            
                 <h3>Digite seus Gastos</h3>
                 <input type='text' value={gastos} onChange={e => setGastos(Number(e.target.value))}     />
 
             <div>
 
                 {resposta}
             
             </div>
            
             <button  onClick={calcular} >Calcular</button>  

             <Link to={'/'}>home</Link>
             
 </div>
 
             </section>
             
            
 
         </main>
     )
 }