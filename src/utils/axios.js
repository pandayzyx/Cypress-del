import axios from  "axios"



export const loadData = ()=>{
    return  axios.get("http://localhost:3000/api/task")
 }