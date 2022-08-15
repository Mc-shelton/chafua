import {React,useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Details from './src/views/Details';
import Cart from './src/views/cart';
import Favorites from './src/views/favorites';
import AddAddress from './src/views/addAddress';
import AddAnotherAdd from './src/views/addAnotherAdd';
import CartDetails from './src/views/cartDetails';
import Search from './src/views/search';

import BottomNav from './src/components/bottomNav';
import TopHeader from './src/components/topHeader';

import props from './src/props/props';
import DelMessage from './src/views/delMessage';
import Orders from './src/views/orders';
import LandPage from './src/views/landPage';
import LogIn from './src/views/logIn';
import ForgotPass from './src/views/forgotPass';
import Confirm from './src/views/confirm';
import SignUp from './src/views/signUp';
import Profile from './src/views/Profile';
import MyAddress from './src/views/myAddress';
import AddNewAddress from './src/views/addNewAddress';


const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  useEffect(()=>{
    console.log(props.categList)
  })

  const [isLoggedIn, setisLoggedIn] = useState(true)

  if(isLoggedIn){
  return (
    <NavigationContainer>
      {/* {true?<TopHeader props={navigation} />:<></>} */}
    <Stack.Navigator 
    initialRouteName = 'Home'
    >

      <Stack.Screen 
      name = 'Home'
      component = {Home}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name = 'Details'
      component = {Details}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'Cart'
      component = {Cart}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'Favorites'
      component = {Favorites}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'AddAddress'
      component = {AddAddress}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'AddAnotherAdd'
      component = {AddAnotherAdd}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'cart'
      component = {AddAnotherAdd}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'CartDetails'
      component = {CartDetails}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'Search'
      component = {Search}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'DelMessage'
      component = {DelMessage}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'Orders'
      component = {Orders}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'Profile'
      component = {Profile}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'MyAddress'
      component = {MyAddress}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name = 'AddNewAddress'
      component = {AddNewAddress}
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );}
  else{
return(
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName = 'LandPage'
    >

      <Stack.Screen 
      name = 'LandPage'
      component = {LandPage}
      options={{headerShown:false}}

      />
      <Stack.Screen 
      name = 'LogIn'
      component = {LogIn}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name = 'ForgotPass'
      component = {ForgotPass}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name = 'Confirm'
      component = {Confirm}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name = 'SignUp'
      component = {SignUp}
      options={{headerShown:false}}
      />
      </Stack.Navigator>
      </NavigationContainer>
)
  }
}


const headerNone = {
  headerShown:false
}