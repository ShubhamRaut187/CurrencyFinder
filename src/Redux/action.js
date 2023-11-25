import { NotRequested,Requesting,RequestSuccess,RequestedFail } from "./actiontypes";

const handelNotRequested =()=>{
    return{
        type:NotRequested
    }
}

const handelRequesting=()=>{
    return{
        type:Requesting
    }
}

const handelRequestSuccess = (val)=>{
    return{
        type:RequestSuccess,
        payload:val
    }
}

const handelRequestFail = ()=>{
    return{
        type:RequestedFail
    }
}

export{
    handelNotRequested,
    handelRequesting,
    handelRequestSuccess,
    handelRequestFail
}