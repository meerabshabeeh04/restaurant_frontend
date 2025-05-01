import axios from 'axios';
import menuData from '../data/MenuItems.json';
const API = axios.create({
  baseURL: 'https://restaurant-backend-qyn7.onrender.com/api/',  // Django runs at 8000
});

// export const fetchMenuItems = () => API.get('menu/');
export const createReservation = (reservationData) => API.post('reserve/', reservationData);

// import menuData from '../data/MenuItems.json';

export const fetchMenuItems = () => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve({
        data: menuData.menuItems
      });
    }, 500);
  });
};