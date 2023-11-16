import axios from "axios";

//this will fetch the product with id from the api
export function fetchProductProfile(id) {
  return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
}
