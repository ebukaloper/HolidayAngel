// API Service
import axios from 'axios'

const ACCESS_KEY = 'a47b92e8221fbe40c8528db0abe208114d92aa42e51ccaa9f91932490a70a874'

const getHost = 'https://api.unsplash.com/'

const getHeader = { headers: { 'Content-Type': 'application/json' , 'Authorization': 'Client-ID ' + ACCESS_KEY  } }
  
export default {
    get: (url, params = {}) => new Promise((resolve, reject) => {
        axios.get(getHost + url, getHeader)
        .then(response => {
            // console.log(`GET response from ${getHost(type) + url + getMode(type)}:`, response)
            resolve(response)
        })
        .catch(error => {
            console.log(`GET error from ${url}:`, error)
            // reject(errorHandler(error, url))
        })
    }),

    // getSpecial: (url, params = {}, type = '') => new Promise((resolve, reject) => {
    //     axios.get(getHost(type) + url, getHeader(type))
    //     .then(response => {
    //         console.log(`GET response from ${getHost(type) + url}:`, response)
    //         resolve(response)
    //     })
    //     .catch(error => {
    //         console.log(`GET error from ${url}:`, error)
    //         reject(errorHandler(error, url))
    //     })
    // }),
  
  }