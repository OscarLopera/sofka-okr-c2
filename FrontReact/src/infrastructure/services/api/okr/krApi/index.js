import axios from "axios";

const functions = {

    createKr: async (kr) => {
        const response = await axios.post('https://back-node-okr-qa.herokuapp.com/api/kr/new', kr)
        return response.data
    },

    deleteKr: async (idKr) => {
        await axios.delete('https://back-node-okr-qa.herokuapp.com/api/kr/delete').then(() => {
            return idKr
        }).catch(error => {
            return error
        })
    }
}

export default functions;