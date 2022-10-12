import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/index.jsx'
import P1 from './pages/p1/index.jsx';
import P2 from './pages/p2/index.jsx';
import P3 from './pages/p3/index.jsx';
import P4 from './pages/p4/index.jsx';
import P5 from './pages/p5/index.jsx';
import P6 from './pages/p6/index.jsx';


export default function Index(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path= '/' exact element={<Home/>}/>
                <Route path='/p1' element={<P1/>}/>
                <Route path='/p2' element={<P2/>}/>
                <Route path='/p3' element={<P3/>}/>
                <Route path='/p4' element={<P4/>}/>
                <Route path='/p5' element={<P5/>}/>
                <Route path='/p6' element={<P6/>}/>
                
            </Routes>
        </BrowserRouter>

    )
}