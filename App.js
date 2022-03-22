import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login';
import Kayit from './src/components/Kayit';
import Home from './src/components/Home';
import Egzersiz from './src/components/Egzersiz';
import Antreman from './src/components/Antreman';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Kayit" component={Kayit} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Egzersiz" component={Egzersiz} />
        <Stack.Screen options={{ headerShown: false }} name="Antreman" component={Antreman} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const firebaseConfig = {
  apiKey: "AIzaSyCskh8U2L7Yi4fCz99Xwl9d-rffXnIE9Bk",
  authDomain: "fitnessapp-89e9c.firebaseapp.com",
  projectId: "fitnessapp-89e9c",
  storageBucket: "fitnessapp-89e9c.appspot.com",
  messagingSenderId: "394007170627",
  appId: "1:394007170627:web:233010053044801d054ef6",
  measurementId: "G-D7C1WKDLM7"
};

*/
export default App;