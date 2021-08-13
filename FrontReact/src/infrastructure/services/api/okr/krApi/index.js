import axios from "axios";

const functions = {

    createKr: async (kr) => {
        const response = await axios.post('https://back-node-okr-qa.herokuapp.com/api/kr/new', kr)
        return response.data
    },

    deleteKr: async ({id}) => {
        await axios.delete('https://back-node-okr-qa.herokuapp.com/api/kr/delete/'+id).then((response) => {
            return response
        }).catch(error => {
            return error
        })
    },
    updateProgressKr: async ({id, krUpdate}) => {
        console.log("MIDDD", id, krUpdate);
        await axios.patch('https://proyecto-sofka-u.herokuapp.com/api/kr/update/'+id,krUpdate).then((updatedObj) => {
            return updatedObj
        }).catch(error => {
            return error
        })
    }
}

export default functions;