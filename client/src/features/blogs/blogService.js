import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';


const getBlogs = async() => {
    try {
        const res = await axios.get(`${base_url}/blog`, config) ; 
            return res.data;
    } catch (error) {
        console.log(error)
    }
}

const getBlog = async(id) => {
    try {
        const res = await axios.get(`${base_url}/blog/${id}`, config) ; 
            return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const blogService  = {
    getBlogs,
    getBlog
}