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

            </div>
        </main>
    )

}