import React from 'react';
import Home from '../Pages/Home';
import CountryDetail from '../Pages/CountryDetail'
import {Route,Routes} from 'react-router-dom'
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/countrydetails' element={<CountryDetail/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;