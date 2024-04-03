// firebaseService.js
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, remove, onValue } = require('firebase/database');

const initializeFirebase = () => {
    const appSetting = {
        databaseURL: "https://jilander-79acb-default-rtdb.asia-southeast1.firebasedatabase.app/"
    };
    const app = initializeApp(appSetting);
    const database = getDatabase(app);
    return { app, database, ref, push, remove, onValue };
};

module.exports = { initializeFirebase };