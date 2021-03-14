importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');
   
	firebase.initializeApp({
        apiKey: "XXXX",
	    authDomain: "XXXX.firebaseapp.com",
	    databaseURL: "https://Your_Project_Id.firebaseio.com",
	    projectId: "XXXX",
	    storageBucket: "XXXX.appspot.com",
	    messagingSenderId: "XXXX",	    
	    appId: "XXXX"
    });

	const messaging = firebase.messaging();
	messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
        
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});