# TwiGram: A Social Media Web Application
Deployed Link- https://twigram-112c8.web.app

TwiGram is a cutting-edge social media web application developed using **React, Firebase**, and **Material UI**. With real-time posting of images, videos, and GIFs, a sleek and user-friendly UI, and secure Google authentication via Firebase, TwiGram brings a whole new level of social networking to the table.

## Features
- **Real-time Posting**: Share your favorite moments instantly with your friends through images, videos, and GIFs.
- **Stunning UI**: TwiGram boasts a modern and intuitive user interface that's both visually appealing and easy to navigate.
- **Google Authentication**: Sign in effortlessly with your Google account, powered by Firebase authentication.

## Getting Started
To run TwiGram locally, follow these simple steps:
- Clone the repository to your local machine and switch to project directory:
```
git clone https://github.com/AnushDubey/twigram
cd twigram
```
- Install the required dependencies:
```
npm install
```
- Create a Firebase project and obtain your Firebase credentials.
- Add a **./src/firebase.js** file to your project and paste the following code, replacing the placeholders with your Firebase credentials:
```
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
```
- Start the development server:
```
npm start
```
- Open your web browser and visit http://localhost:3000 to access TwiGram locally.

## Tech-Stack
- ReactJS
- Firebase
- Material UI
