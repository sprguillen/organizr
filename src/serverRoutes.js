const host = 'http://localhost';
const port = '8081';

const loginAPI = `${host}:${port}/api/login`;
const registerAPI = `${host}:${port}/api/register`;

module.exports = {
  loginAPI,
  registerAPI,
};
