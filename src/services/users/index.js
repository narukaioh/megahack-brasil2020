import axios from "axios"

const client = axios.create({
  baseURL: 'http://localhost:9999/',
  timeout: 3000
})

const UserService = {
  get: async (id) => {
    const response = await client.get(`/user?id=${id}`)
    return response.data.shift()
  },
  update: async (investor) => {
    const response = await client.put(`/user/${investor.id}`, investor)
    return response.data
  },
  getClientsByCategory: async (idInvestor, category) => {
    const response = await client.get(`/user?id_ne=${idInvestor}&category=${category}`)
    return response.data
  },
  list: () => {}, 
  create: (user) => { return user }
}

export default UserService