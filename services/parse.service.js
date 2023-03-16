import axios from "axios";

const instance = axios.create({
    baseURL: '',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const parseCode = async (code) => {
    const body = {
        code
    }

    const result = await instance.post('/api/parser/parse', body)
    return result.data
}