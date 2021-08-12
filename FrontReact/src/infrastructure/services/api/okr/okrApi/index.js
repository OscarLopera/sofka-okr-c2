import axios from "axios";

const functions = {

    loadOkr: async () => {
        const response = await axios.get('')
        return response.data
    },
    createOkr: async (okr) => {
        const response = await axios.post('https://back-node-okr-qa.herokuapp.com/api/okr/new/', okr)
        return response.data
    },
    updateOkr: (okr) => {
        return {
            id:okr.id,
            name: okr.name,
            category: okr.category,
            description: okr.description
        }
    },
    deleteOkr: async (idOkr) => {
        await axios.delete(''+idOkr).then(() => {
            return idOkr
        }).catch(error=>{
            return error
        })
    },


}

export default functions