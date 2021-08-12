import axios from "axios";

const functions = {
    loadingOKR: async (id) => {
        //const id = "61106133609d16f1740ddf34"
        console.log("Estoy llegando al api",id);
        const response = await axios.get('https://back-spring-grupo-5.herokuapp.com/api/getokrbyuserid/'+id);
        return response.data
    },
    loadingOKRid: async (id) =>{
        const response = await axios.get('http://back-spring-grupo-5.herokuapp.com/api/getokrbyid/'+id);
        return response.data
    },

    getidOKRLast: async (id) => {
        //const id = "6112ef6370e2131bb4730d1a"
        const response = await axios.get('https://back-spring-grupo-5.herokuapp.com/api/getlastokrbyuserid/'+id);
        return response.data
    }

}

export default functions;