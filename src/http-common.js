import axios from 'axios';

//create axios instance for the further REST API calls
export default axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});