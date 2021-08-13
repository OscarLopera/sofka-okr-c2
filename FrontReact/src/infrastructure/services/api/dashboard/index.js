import axios from "axios";

const functions = {
    loadingOKR: async () => {
        const id = "61157b07a2605b535bfab3ad"
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
    },

    getAllOkrs: async () => {
        const response = await axios.get('https://back-spring-grupo-5.herokuapp.com/api/get/all');
        return response.data
    }

}

export default functions;