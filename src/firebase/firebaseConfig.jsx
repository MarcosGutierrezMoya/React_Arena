var admin = require("firebase-admin");

var serviceAccount = require("/Users/marcosgutierrez/Documents/GammaTech/Pruebas/juego_react/src/firebase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webfight-618a4-default-rtdb.europe-west1.firebasedatabase.app"
});
