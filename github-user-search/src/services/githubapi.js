import axios from 'axios';

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: 'GET https://api.github.com/search/users?'

,
  headers: {
    Authorization: githubToken ? `token ${githubToken}` : undefined,
  },
});

export default api;