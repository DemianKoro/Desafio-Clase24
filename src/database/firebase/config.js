const admin = require('firebase-admin');
const serviceAccount = require('./firebase-credentials.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseDb = firebase.firestore();
console.log('\u001b[1;34m', '⚙ Configuring Firebase');

module.exports = {
  firebaseDb,
  admin,
};
