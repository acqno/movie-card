import axios from 'axios';

const KEY = '4bf5f25de157fab20a91ea6e8fff8442';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: KEY
    }
})