import axios from "axios";

const functions = {

    loadOkr: async () => {
        const response = await axios.get('http://localhost:3000/peliculas')
        return response.data
    },
    createOkr: async (okr) => {
        const response = await axios.post('http://localhost:3000/peliculas', okr)
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
        await axios.delete('http://localhost:3000/peliculas'+idOkr).then(() => {
            return idOkr
        }).catch(error=>{
            return error
        })
    },


}

export default functions