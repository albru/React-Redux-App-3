import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6e3bb.firebaseio.com/'
});

export default instance;