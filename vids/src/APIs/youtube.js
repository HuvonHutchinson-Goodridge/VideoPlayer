import axios from 'axios';


const KEY = 'AIzaSyA0xUkC5bKFr40P-ZU7ygGJBcOrEttK4XI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {part: "snippet", maxResults: 5, key: KEY}
})

