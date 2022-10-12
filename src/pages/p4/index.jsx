import './index.scss';
import { useState } from "react"
import { Link } from 'react-router-dom';




    export default function P4(){

    const [salario, setSalario]= useState(0);

    const [bonus,setBonus]= useState(0);

    const [desc,setDesc]= useState(0);

    const [resposta, setResposta]= useState(0);
 
    function calcular(){
 
     let a = salario * bonus /100;
     let b = salario + a - desc;
     setResposta(`Seu salario liquido e  ${b}`);
    }
 
 
     return(
         <main className="home">
             <section>
             
                <h1>Calcular Salario Liquido</h1>
 
             <div>   
                 <h3>Digite seu Salario</h3>
                 <input type='text' value={salario} onChange={e => setSalario(Number(e.target.value))}     />
             
 
            
                 <h3>Digite seu Bonus</h3>
                 <input type='text' value={bonus} onChange={e => setBonus(Number(e.target.value))}     />
             
 
            
                 <h3>Digite seu Desconto</h3>
                 <input type='text' value={desc} onChange={e => setDesc(Number(e.target.value))}     />
             
 
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