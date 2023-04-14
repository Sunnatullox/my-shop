import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';


const postQuery = async(contactData) => {
    try {
        const res = await axios.post(`${base_url}/enquiry`,contactData) ; 
            return res.data;
      
    } catch (error) {
        console.log(error)
    }
}



export const contactService  = {
    postQuery
}