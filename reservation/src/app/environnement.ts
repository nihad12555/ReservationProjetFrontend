// La racine de toutes les adresses du serveur backend
const addressRoot: string = `http://localhost:5056/api`;

// La racine de toutes les adresses des requêtes sur les réservations
const reservationServiceAddress = `${addressRoot}/reservations`;

// La racine de toutes les adresses des requêtes sur les horaires
const horaireServiceAddress = `${addressRoot}/horaires`;

// La racine de toutes les adresses des requêtes sur les utilisateurs
const userServiceAddress = `${addressRoot}/Auth`;

// La racine de toutes les adresses des requêtes sur les notifications
const notificationServiceAddress = `${addressRoot}/notifications`;

// La racine de toutes les adresses des requêtes sur les salles
const roomServiceAddress = `${addressRoot}/rooms`;

export {
  addressRoot,
  reservationServiceAddress,
  horaireServiceAddress,
  userServiceAddress,
  notificationServiceAddress,
  roomServiceAddress,
};
