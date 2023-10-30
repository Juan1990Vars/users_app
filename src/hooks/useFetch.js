// 1
import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    // READ
    const getApi = () => {
        const url = `${baseUrl}`
        axios.get(url)
          .then(res => setInfoApi(res.data))
          .catch(err => console.log(err))
    }
    // CREATE
    const postApi = ( data ) => {
         const url = `${baseUrl}`
        axios.post(url, data)
          .then(res => {
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
          })
          .catch(err => console.log(err))
    }
    //DELETE
    const deleteApi = (id) => {
        const url = (`${baseUrl}/${id}/`)
        axios.delete(url)
          .then(res => {
            console.log(res.data)
            setInfoApi(infoApi.filter(e => e.id !== id))
          })
          .catch(err => console.log(err))
    }
    // UPDATE
    const updateApi = (id, data) => {
        const url = (`${baseUrl}/${id}/`)
        axios.put(url, data)
          .then(res => {
            console.log(res.data)
            setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
          })
          .catch(err => console.log(err))
    }

    return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch