import axios from 'axios';

// Setup config/headers and token
export const tokenConfig = (token: string) => {
  // Get token from localstorage
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      authorization: '',
    },
  };

  // If token, add to headers
  if (token) {
    config.headers.authorization = token;
  }

  return config;
};

export const userRegister = (
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
) =>
  axios
    .post('/api/v1/users/register', {
      name,
      email,
      password,
      passwordConfirm,
      role: 'user',
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });

export const userLogin = (email: string, password: string) =>
  axios
    .post('/api/v1/users/login', { email, password })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });

export const oAuthAPI = (provider: string, tokenBlob: { type: string }) =>
  axios
    .post(`/api/v1/oauth/${provider}`, tokenBlob, {
      headers: { 'content-type': tokenBlob.type },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });

export const checkAuth = (token: string) =>
  axios
    .get('/api/v1/users/me', tokenConfig(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err.response.data;
    });
