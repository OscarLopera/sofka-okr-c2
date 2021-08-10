import axios from 'axios';

export default {
    validateUser: async (userId) => {
        const response = await axios.get('https://admin-reto-final.herokuapp.com/api/usuario/validar/' + userId);
        return response.data;
    },
    createUser: async (userFirebase) => {
        const response = await axios.post('https://admin-reto-final.herokuapp.com/api/usuario/crear',userFirebase);
        return response.data;
    },
    getVertical: async (verticalId) => {
        const response = await axios.get('https://admin-reto-final.herokuapp.com/api/vertical/' + verticalId);
        return response.data;
    },
}