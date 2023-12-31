import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

firebase.initializeApp({
    apiKey: "AIzaSyCjLtV7oESaAFUg4o-mcHWlj9I-GUapu_M",
    authDomain: "movielog-d5a7d.firebaseapp.com",
    projectId: "movielog-d5a7d",
    storageBucket: "movielog-d5a7d.appspot.com",
    messagingSenderId: "37578670623",
    appId: "1:37578670623:web:e0f691e57106ef97f8cb2a",
    measurementId: "G-QWQQXEVX94"
 });

if (Notification.permission !== "granted") {
    Notification.requestPermission();
}
    function showNotification(title, body, icon) {
    if (Notification.permission !== "granted") {
      return; // Stops here if no permission
    }

    const notification = new Notification(title, {
      body: body,
      icon: icon
    });
    }
    
    const database = firebase.database();
    database.ref('notifications').on('value', snapshot => {
      const notificationData = snapshot.val();
      const { title, body, icon } = notificationData;
      showNotification(title, body, icon);
  });
  showNotification('New Message!', 'You have a new message!', './img/clapboard.png');