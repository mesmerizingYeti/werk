import axios from 'axios'

const UserAPI = {
  
  getUsers: () => axios.get('/users'),
  getUser: (id) => axios.get(`/users/${id}`),
  getMyUser: (token) => axios({
    method: 'get',
    url: '/myuser',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }),
  createUser: (user) => axios.post('/users', user),
  updateUser: (token, values) => axios({
    method: 'PUT',
    url: '/users',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: values
  }),
  deleteUser: (id) => axios.delete(`/users/${id}`),
  authUser: (token) => axios({
    method: 'get',
    url: '/authorize',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  
}

export default UserAPI