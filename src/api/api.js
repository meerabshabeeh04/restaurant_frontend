import axios from 'axios';

const API = axios.create({
  baseURL: 'https://restaurant-backend-qyn7.onrender.com/api/',  // Django runs at 8000
});

export const fetchMenuItems = () => API.get('menu/');
export const createReservation = (reservationData) => API.post('reserve/', reservationData);
