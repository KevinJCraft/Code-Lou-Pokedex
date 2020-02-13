import axios from 'axios'

const useFetchThenRender = (url, path) => {
    return axios.get(url)
        .then(response => {
            history.push(path, response.data)
        })
        .catch(error => error)
}

export default useFetchThenRender