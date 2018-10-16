import axios from 'axios'
export default axios.create({
  baseURL: 'http://49.247.204.250:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})
