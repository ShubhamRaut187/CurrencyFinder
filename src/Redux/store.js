import {legacy_createStore as createstore} from 'redux';
import { operationReducer } from './operationReducer';

export let store = createstore(operationReducer);
// store.subscribe(()=>{
//     console.log(store.getState());
// })