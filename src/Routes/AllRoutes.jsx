import React from 'react';
import Home from '../Pages/Home';
import {Route,Routes} from 'react-router-dom'
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;