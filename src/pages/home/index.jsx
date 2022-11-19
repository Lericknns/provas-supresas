import './index.scss';
import { Link } from 'react-router-dom';
export default function Home(){

    return(
        <main className='home'>
            <div>
                <h1>escolha</h1>
                 
                 <Link to={'/p1'}>açai</Link>
                 <Link to={'/p2'}>Saint seiya</Link>
                 <Link to={'/p3'}>gramas</Link>
                 <Link to={'/p4'}>salario</Link>
                 <Link to={'/p5'}>gasolina</Link>
                 <Link to={'/p6'}>febre</Link>
                 <Link to={'/p7'}>Familia</Link>
                 <Link to={'/p8'}>cinema</Link>
                 <Link to={'/p9'}>contagen</Link>
                 <Link to={'/p10'}>black line</Link>
                 <Link to={'/p11'}>retangulo</Link>
                 <Link to={'/p12'}>number game</Link>
                 <br/>
                 <Link to={'/stage'}> <img src='/image/sonic.png'/>   </Link>
            </div>
        </main>
    )

}