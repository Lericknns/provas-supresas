import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function P7(){

    const [inicio, setInicio]= useState[0];
    const [fim,setFim]= useState[0];
    const [resposta,setResposta]= useState(0);


   function ate(){   

    for ( let i = inicio => 0; fim<=10; i++){
        setResposta(i)
  


    
 }
 
     return(
         <main className="home">
             <section>
             
                <h1>Contar até</h1>
 
             <div>   
                 <h3>começar</h3>
                 <input type='number' value={inicio} onChange={e => setInicio(Number(e.target.value))}     />
             
 
            
                 <h3>atè</h3>
                 <input type='number' value={fim} onChange={e => setFim(Number(e.target.value))}     />
 
             <div>
 
                 {resposta}
             
             </div>
            
             <button  onClick={ate} >Calcular</button>  

             <Link to={'/'}>home</Link>
             
 </div>
 
             </section>
             
            
 
         </main>
     )
 }}