import axios from 'axios'
const BASEURL = "https://api.quotable.io/random";
export default {
    quote: function () {
        return axios.get(BASEURL);
    }
}