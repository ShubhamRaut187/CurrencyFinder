import React from 'react';
import './Clear.css'
import { handelNotRequested } from '../Redux/action';
import { useDispatch } from 'react-redux';
function Clear(props) {
    let dispatch = useDispatch();
    return (
        <div className='clear_main'>
            <button onClick={()=>{
                dispatch(handelNotRequested())
            }}>Clear Search</button>
        </div>
    );
}
export default Clear;