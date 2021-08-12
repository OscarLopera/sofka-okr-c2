import axios from "axios";

const functions = {
    loadingOKR: async (id) => {
        //const id = "61106133609d16f1740ddf34"
        console.log("Estoy llegando al api",id);
        const response = await axios.get('https://grupo5-back-prueba.herokuapp.com/api/getokrbyuserid/'+id);
        return response.data
    },
    loadingOKRid: async (id) =>{
        const response = await axios.get('https://grupo5-back-prueba.herokuapp.com/api/getokrbyid/'+id);
        return response.data
    }

}

export default functions;