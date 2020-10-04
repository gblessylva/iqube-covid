let defaultState={
    result: {}
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="SHOW_RESULT"){
        return{
            ...state,
            result: action.result
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;