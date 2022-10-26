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
                 <Link to={'/p6'}>febrea</Link>
                 <Link to={'/p7'}>Familia</Link>
                 <Link to={'/p8'}>cine</Link>
                 <Link to={'/p9'}>até</Link>
                 <Link to={'/p10'}>black line</Link>
                 <Link to={'/p11'}>tristeza</Link>
                 <br/>
                 <Link to={'/stage'}> <img src='/image/sonic.png'/>   </Link>
            </div>
        </main>
    )

}