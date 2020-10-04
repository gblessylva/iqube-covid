import axios from "axios";

export function loadData(){
    return(dispatch)=>{
        return axios.get("https://covidnigeria.herokuapp.com/api").then((response)=>{
            console.log(response.data)
            dispatch(showResult(response.data));
        })
    }
}

export function showResult(result){
    return{
        type:"SHOW_RESULT",
        result : result
    }
}