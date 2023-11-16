// A mock function to mimic making an async request for data
import axios from 'axios';

export function fetchProducts() {
     return axios.get('https://api.escuelajs.co/api/v1/products')
}

