import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function P2(){
    const [mes, setMes] = useState('')
    const [dia, setDia] = useState(1)
    const [resp, setResp] = useState('')
    
    function zodiaco(){

        if(dia <= 0 || dia > 31){
        setResp(' invalido ')
        }
        else if(!mes || mes === 'Selecione'){
            setResp('Insira o mes')
        }          
        else if(mes === 'Setembro' && dia>=23|| mes === 'Outubro' && dia<=22 ){
            setResp(<div> 
                <p>Seu signo é de libra</p>
                <img src='/image/libra.png'/>
            </div>
                
            )
        }

        else if(mes === 'Janeiro' && dia>=21|| mes === 'fevereiro' && dia<=19 ){
            setResp(
            <div> 
                <p>Seu signo é de aquário, Não Libra</p>
                <img src='/image/aquario.png'/>
            </div>)
        }
            else if(mes === 'fevereiro' && dia>=20|| mes === 'Março' && dia<=20 ){
                setResp(
                <div> 
                    <p>Seu signo é de Peixes, Não Libra</p>
                    <img src='/image/peixes.png'/>
                </div>)
            }
                else if(mes === 'Março' && dia>=21|| mes === 'Abril' && dia<=20 ){
                    setResp(
                    <div> 
                        <p>Seu signo é de áries, Não Libra</p>
                        <img src='/image/aries.png'/>
                    </div>)
                }     
                
                else if(mes === 'Abril' && dia>=21|| mes === 'Maio' && dia<=20 ){
                    setResp(<div> 
                        <p>Seu signo é de Touro, Não Libra</p>
                        <img src='/image/touro.png'/>
                    </div>)
                }     
    
                else if(mes === 'Maio' && dia>=21|| mes === 'Junho' && dia<=20 ){
                    setResp(
                    <div> 
                        <p>Seu signo é de Gêmeos, Não Libra</p>
                        <img src='/image/gemeos.png'/>
                    </div>)
                }
        
                else if(mes === 'Junho' && dia>=21|| mes === 'Julho' && dia<=22 ){
                    setResp(
                    <div> 
                        <p>Seu signo é de câncer, Não Libra</p>
                        <img src='/image/cancer.png'/>
                    </div>)
                }
                    else if(mes === 'Julho' && dia>=23|| mes === 'Agosto' && dia<=22 ){
                        setResp(
                        <div> 
                            <p>Seu signo é de Leão, Não Libra</p>
                            <img src='/image/leao.png'/>
                        </div>
                        )
                    }
                        else if(mes === 'Agosto' && dia>=23|| mes === 'Setembro' && dia<=22 ){
                            setResp(<div> 
                                <p>Seu signo é de virgem, Não Libra</p>
                                <img src='/image/virgem.png'/>
                            </div>)
                        }     
                        
                        else if(mes === 'Outubro' && dia>=23 || mes === 'Novembro' && dia<=21 ){
                            setResp(
                            <div> 
                                <p>Seu signo é de escorpião, Não Libra</p>
                                <img src='/image/escorpiao.png'/>
                            </div>)

                        }     
                        else if(mes === 'Novembro' && dia>=22|| mes === 'Dezembro' && dia<=21 ){
                            setResp(
                            <div> 
                                <p>Seu signo é de sagitário, Não Libra</p>
                                <img src='/image/sagitario.png'/>
                            </div>)
                        }     
                        
                        else if(mes === 'Dezembro' && dia>=22|| mes === 'Janeiro' && dia<=20 ){
                            setResp(
                            <div> 
                                <p>Seu signo é de capricórnio, Não Libra</p>
                                <img src='/image/shura_face.png'/>
                            </div>)

                        }                 
    }
   
    return(
       
        <main className="home">
           <section>

                <div>

                    <h3> Libras ?? </h3>

                    <select value={mes} onChange={e => setMes(e.target.value)}>
                        <option>Selecione</option>
                        <option>Janeiro</option>
                        <option>fevereiro</option>
                        <option>Março</option>
                        <option>Abril</option>
                        <option>Maio</option>
                        <option>Junho</option>
                        <option>Julho</option>
                        <option>Agosto</option>
                        <option>Setembro</option>
                        <option>Outubro</option>
                        <option>Novembro</option>
                        <option>Dezembro</option>
                    </select>

                    <input type='number' placeholder="dia de nascimento"  value={dia} onChange={e => setDia(Number(e.target.value))} />

                    <button onClick={zodiaco}>
                         Verificar
                    </button>

                    <div>
                        {resp}
                    </div>
                </div>
                <Link to={'/'}>home</Link>
            </section>

        </main>
    )
}