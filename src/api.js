import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'http://localhost:1337/api', // Replace with your Strapi API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization : "bearer" + process.env.REACT_APP_API_KEY
  },
});