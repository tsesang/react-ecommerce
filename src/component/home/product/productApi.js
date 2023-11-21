// A mock function to mimic making an async request for data
import axios from 'axios';

export function fetchProducts(page) {
     return axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
}

