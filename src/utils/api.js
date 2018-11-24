// API Service for Unsplash

/* eslint-disable */

import axios from 'axios'

const ACCESS_KEY = 'a47b92e8221fbe40c8528db0abe208114d92aa42e51ccaa9f91932490a70a874'

const getHost = 'https://api.unsplash.com/'

const getHeader = { headers: { 'Content-Type': 'application/json' , 'Authorization': 'Client-ID ' + ACCESS_KEY  } }
  
export default {
    get: (url, params = {}) => new Promise((resolve, reject) => {
        axios.get(getHost + url, getHeader)
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            console.log(`GET error from ${url}:`, error)
        })
    }),
  }