import axios from "axios";



export const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
});