import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from './pages/home/index.jsx'
import P1 from './pages/p1/index.jsx';
import P2 from './pages/p2/index.jsx';
import P3 from './pages/p3/index.jsx';
import P4 from './pages/p4/index.jsx';
import P5 from './pages/p5/index.jsx';
import P6 from './pages/p6/index.jsx';
import P7 from './pages/p7/index.jsx';
import P8 from './pages/p8/index.jsx';
import P9 from './pages/p9/index.jsx';
import P10 from './pages/p10/index.jsx';
import P11 from './pages/p11/index.jsx';
import Emerald from './pages/stage/index.jsx';

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
                <Route path='/p7' element={<P7/>}/>
                <Route path='/p8' element={<P8/>}/>
                <Route path='/p9' element={<P9/>}/>
                <Route path='/p10' element={<P10/>}/>
                <Route path='/p11' element={<P11/>}/>
                <Route path='/stage' element={<Emerald/>}/>

            </Routes>
        </BrowserRouter>

    )
}