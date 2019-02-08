import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 4a6380202ceed3af86b9b98786ad2a7367bf2aa1bc8ec63cdf32eb2bcfb0112c" 
    }
});