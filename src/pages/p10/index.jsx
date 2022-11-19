import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function P10(){
     
    const [qto,setQto]= useState(0);
    const [resp, setResp]= useState(0);
    
 

 
 
    return(
       
        <main className='mouse'>
                
                <Link to={'/'}>home</Link>
          
        </main>
    )
    }   