import axios from 'axios';

const api = axios.create({
  // Remplacez l'URL ci-dessous par l'URL réelle de votre serveur Backend (Node.js, PHP, etc.)
  baseURL: 'http://localhost:5000/api', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Ce code ajoute automatiquement le token de sécurité à chaque requête si l'utilisateur est connecté
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Ou l'endroit où vous stockez votre token
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (erreur) => {
    return Promise.reject(erreur);
  }
);

export default api;
