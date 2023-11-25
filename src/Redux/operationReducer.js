let InitialData={
    Status:"NotRequested",
    Countries:[],
}

const operationReducer=(store=InitialData,action)=>{
    switch (action.type) {
        case "NotRequested":{
            return{
                Status:"NotRequesting",
                Countries:[]
            }
        }
        case "Requesting":{
            return{
                Status:"Requesting",
                Countries:[]
            }
        }
        case "RequestSuccess":{
            return{
                Status:"RequestSuccess",
                Countries:action.payload
            }
        }
        case "RequestFail":{
            return{
                Status:"RequestFail",
                Countries:[]
            }
        }
         default:return InitialData
            
    }
}

export{operationReducer}