import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mern-stack-app-api.onrender.com',
})

export const insertEmployee = payload => api.post(`/employees`, payload)
export const getAllEmployees = () => api.get(`/employees`)
export const updateEmployeeById = (id, payload) => api.put(`/employees/${id}`, payload)
export const deleteEmployeeById = id => api.delete(`/employees/${id}`)
export const getEmployeeById = id => api.get(`/employees/${id}`)

const apis = {
    insertEmployee,
    getAllEmployees,
    updateEmployeeById,
    deleteEmployeeById,
    getEmployeeById,
}

export default apis
