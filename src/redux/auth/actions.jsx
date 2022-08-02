import { USER_LOGIN_ERR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOG_OUT, USER_REGISTER_ERR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./actionTypes"

export const handleLoginSuccess=(payload)=>{
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}
export const handleLoginLoading=()=>{
    return {
        type: USER_LOGIN_LOADING
    }
}
export const handleLoginErr=()=>{
    return {
        type: USER_LOGIN_ERR
    }
}

export const handleRegisterSuccess=(payload)=>{
    return {
        type: USER_REGISTER_SUCCESS,
        payload
    }
}
export const handleRegisterLoading=()=>{
    return {
        type: USER_REGISTER_LOADING
    }
}
export const handleRegisterErr=()=>{
    return {
        type: USER_REGISTER_ERR
    }
}
export const handleLogOut=()=>{
    return{
        type:USER_LOG_OUT
    }
}



export const handleUserLoginFetch=(enteredData)=>(dispatch)=>{

    console.log(enteredData)
dispatch(handleLoginLoading())
fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body: JSON.stringify(enteredData),
    headers:{
        "Content-Type": "application/json"
    }
})
.then(res=>res.json())
.then(data=>{console.log(data)
    dispatch(handleLoginSuccess(data.token))})
.catch(err=> {console.log(err)
    dispatch(handleLoginErr())})


}


export const handleRegisterFetch=(enteredData)=>(dispatch)=>{

    console.log(enteredData)
    dispatch(handleRegisterLoading())
    fetch(`https://reqres.in/api/register`,{
        method:"POST",
        body: JSON.stringify(enteredData),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>dispatch(handleRegisterSuccess(data.token)))
    .catch(err=> dispatch(handleRegisterErr()))



    }