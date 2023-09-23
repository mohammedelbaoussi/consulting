import axios from "axios"


export const getAPI = async(url, token)=>{
    
    const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/${url}`, {
        headers: {
            Authorization: token,
            Accept: 'Application/json'
        }, withCredentials: true, credentials: 'include'
})
return res
}