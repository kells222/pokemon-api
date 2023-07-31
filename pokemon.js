
const axios = require("axios")
const BASEURL = "https://pokeapi.co/api/v2"

async function getPokes (URL){
try {
   const result= await axios.get(`${URL}/pokemon`);
   const {data} = result 
   console.log(data)
//    console.log(result)
    // .then(res=>{
    //     const {data}=res
    //     console.log(data)
    // })

} catch (error) {
    
}}

getPokes(BASEURL)