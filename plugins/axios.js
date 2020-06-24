//Plugin Nuxtjs
const config = require("../configurations/config").config();
let token = localStorage.getItem(`token`);

export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      authorization: token
    }
  });

  api.interceptors.request.use(config => {
    token = localStorage.getItem(`token`);
    config.headers.authorization = localStorage.getItem(`token`);

    return config;
  });

  // Base URL
  api.setBaseURL(config.URL_SERVER);

  // Inject to context as $api
  inject("api", api);
}
