import './index.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function P6(){
    
  
 

        const [temp,setTemp]= useState(0);
        const [resp,setResp]= useState('');
      
        function SituacaoFebre(){
    
            if(temp>=41){
                setResp('Hipertemia')
            }
    
            else if(temp>=39.6&&temp<41){
                setResp('febre alta')
            }
    
            else if (temp>=37.6&&temp<39.6){
                setResp('febre ')
            }
    
            else if (temp>=36&&temp<37.6){
                setResp('normal')
            }
            else if(temp<36){
                setResp('hiportermia')
            }
        }
    
        return(
            
            <main className="home">
                <section>
                <h1>termômetro</h1>
                <div>
                    <h3>Temperatura</h3>
                    <input type='number' value={temp} onChange={e => setTemp(Number(e.target.value))} />
               
               
            
                <button onClick={SituacaoFebre} >Verificar</button>
    
                
                {resp}
                
               
                 </div>


                    <Link to={'/'}>home</Link>
                </section>
                
            </main>
        )
    }
    
