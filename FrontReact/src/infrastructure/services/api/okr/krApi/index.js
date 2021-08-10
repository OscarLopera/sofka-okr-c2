import axios from "axios";

const functions = {

    createKr: async () => {
        const response = await axios.post('URL ENDPOINT')
        return response.data
    },

    deleteKr: async (idKr) =>{
        await axios.delete('URL_ENDPOINT').then(()=>{
            return idKr
        }).catch(error =>{
            return error
        })
    }
}

export default functions;