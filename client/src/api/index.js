import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const getUser = (_id) => API.get(`/user/${_id}`);
export const loginUser = (formData) => API.post("/user/signin", formData);
export const createUser = (formData) => API.post("/user/signup", formData);
export const updateUser = (_id, userData) =>
  API.patch(`/user/${_id}`, userData);
export const deleteUser = (_id) => API.delete(`/user/${_id}`);

export const fetchPosts = () => API.get(`/post`);
export const getPostById = (_id) => API.get(`/post/${_id}`);
export const fetchPostByMt = (mountain, date, peopleNum) => API.get(`/post/search/${mountain}/${date}/${peopleNum}`);
export const createPost = (post) => API.post("/post", post);
export const updatePost = (_id, post) => API.patch(`/post/${_id}`, post);
export const applyPost = (_id, userID) => API.patch(`/post/apply/${_id}`, userID);
export const deletePost = (_id) => API.delete(`/post/${_id}`);
