import axios from 'axios';

const KEY = 'AIzaSyAT8V4A9CcJMQeqvnJx42SWQV7Iw4bUSzc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});
