import clientUser from "./axios"

const tokenAuth = token =>{
    if(token){
        return clientUser.defaults.headers.common["x-auth-token"] = token
    } else {
        return clientUser.defaults.headers.common["x-auth-token"]
    }
}

export default tokenAuth;