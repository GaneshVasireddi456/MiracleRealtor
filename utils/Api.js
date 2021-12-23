import axios from "axios"
export const baseURL='https://bayut.p.rapidapi.com'
export const getAPI = async (url) => {
    const { data } = await axios.get((url),
        {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '96ce492163mshc551618112fb6aap1f07dajsnb655ea4653d5'
            }
        })
    return data
}
