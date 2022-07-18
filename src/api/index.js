import axios from "axios";

const url = 'https://image-crud.herokuapp.com/images';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}/edit`, updatedPost);

export const deletePost =  (id) => axios.delete(`${url}/delete/${id}`);