importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js')

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    'messagingSenderId': '961426606911',
    'apiKey': 'AIzaSyDSMu_AenLEFOPBNkPQkIr6dtKmzwSIxr0',
    'authDomain': 'test-web-push-ece72.firebaseapp.com',
    'databaseURL': 'https://test-web-push-ece72.firebaseio.com',
    'projectId': 'test-web-push-ece72',
    'storageBucket': 'test-web-push-ece72.appspot.com'
})

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    payload.data.data = JSON.parse(JSON.stringify(payload.data));
    registration.showNotification(payload.data.title, payload.data);
});
