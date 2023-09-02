import axios from "axios";

export const exampleOne = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const exampleTwo = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
