import axios from "axios"

const client = axios.create({
  baseURL: 'http://localhost:9999/',
  timeout: 3000
})

const get = async (id) => {
  const response = await client.get(`/user?id=${id}`)
  return response.data.shift()
}

const update = async (investor) => {
  const response = await client.put(`/user/${investor.id}`, investor)
  return response.data
}

const updateUsers = async (users) => {
  return Promise.all(users.map( async user => { 
    return await update(user)
  }))
}

const getClientsByCategory = async (idInvestor, category) => {
  const response = await client.get(`/user?id_ne=${idInvestor}&category=${category}`)
  return response.data
}

const UserService = {
  get: get,
  update: update,
  updateUsers: updateUsers,
  getClientsByCategory: getClientsByCategory,
  list: () => {}, 
  create: (user) => { return user }
}

export default UserService