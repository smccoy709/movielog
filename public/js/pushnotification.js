firebase.initializeApp({
    apiKey: "AIzaSyCjLtV7oESaAFUg4o-mcHWlj9I-GUapu_M",
    authDomain: "movielog-d5a7d.firebaseapp.com",
    projectId: "movielog-d5a7d",
    storageBucket: "movielog-d5a7d.appspot.com",
    messagingSenderId: "37578670623",
    appId: "1:37578670623:web:e0f691e57106ef97f8cb2a",
    measurementId: "G-QWQQXEVX94"
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: './img/clapboard.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});