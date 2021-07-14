import axios from "axios";

const URL = 'http://localhost:3001';

export const requestRegisterEmployee = async (employee) => {
  const options = {
    method: 'POST',
    url: `${URL}/employees/register`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: employee
  }

  return axios.request(options).then((response) => {
    return response.data
  })
}

export const findById = async (id) => {
  const options = {
    method: 'GET',
    url: `${URL}/employees/${id}`,
  }

  return axios.request(options).then((response) => {
    return response.data
  })
}

export const requestUpdateEmployee = async (employee, id) => {
  const options = {
    method: 'PUT',
    url: `${URL}/employees/update/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: employee
  }

  return axios.request(options).then((response) => {
    return response.data
  })
}

export const requestDeleteEmployee = async (id) => {
  const options = {
    method: 'DELETE',
    url: `${URL}/employees/delete/${id}`,
  }

  return axios.request(options).then((response) => {
    return response.data
  })
}

export const requestFilterEmployees = async (name, sector, office, level) => {
  const options = {
    method: 'GET',
    url: `${URL}/employees/search`,
    params: { nome: name, setor: sector, cargo: office, nivel: level },
  }

  return axios.request(options).then((response) => {
    return response.data
  })
}