import * as React from 'react';
import { View, Text, Button, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './App/Screen/HomeScreen';
import Donation from './App/Screen/Donation';
import PastDonation from './App/Screen/PastDonation';
import Menu from './App/Screen/Menu';
import RequestDetails from './App/Screen/RequestDetails';
import Profile from './App/Screen/Profile';
import Request from './App/Screen/Request';
import WelcomePage from './App/Screen/WelcomePage';
import TutorialPage from './App/Screen/TutorialPage';
import LoginScreen from './App/Screen/LoginScreen';
import RegisterScreen from './App/Screen/RegisterScreen';
import PastRequest from './App/Screen/PastRequest';
import NewRequest from './App/Screen/NewRequest';
import ViewDonorDetails from './App/Screen/ViewDonorDetails';


const Stack = createStackNavigator()



function App()  {

  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{
          headerShown : false
        }}
      >
        <Stack.Screen
          name="HomeScreen" 
          component={HomeScreen}
          />
        <Stack.Screen 
          name='Donation'
          component={Donation}
        />
        <Stack.Screen 
          name='PastDonation'
          component={PastDonation}
        />
        <Stack.Screen 
          name='Menu'
          component={Menu}
        />
        <Stack.Screen 
          name='RequestDetails'
          component={RequestDetails}
        />
        <Stack.Screen 
          name='Profile'
          component={Profile}
        />
        <Stack.Screen 
          name='Request'
          component={Request}
        />
        <Stack.Screen 
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen 
          name='RegisterScreen'
          component={RegisterScreen}
        />
        <Stack.Screen 
          name='PastRequest'
          component={PastRequest}
        />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="TutorialPage" component={TutorialPage} />
        <Stack.Screen name="NewRequest" component={NewRequest} />
        <Stack.Screen name="ViewDonorDetails" component={ViewDonorDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;