import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://js-jr-dev-board.herokuapp.com/api/v1/jobs'
});
export default instance;