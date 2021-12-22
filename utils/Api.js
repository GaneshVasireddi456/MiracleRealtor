import axios from "axios"
export const baseURL='https://bayut.p.rapidapi.com'
export const getAPI = async (url) => {
    const { data } = await axios.get((url),
        {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '7b525bf8c1mshfa2d83fca0899b9p14e40fjsn7c2374e94b1a'
            }
        })
    return data
}
