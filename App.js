import {React,useEffect} from 'react';
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


const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  useEffect(()=>{
    console.log(props.categList)
  })
  return (
    <NavigationContainer>
      {true?<TopHeader />:<></>}
    <Stack.Navigator 
    initialRouteName = 'Search'
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
    </Stack.Navigator>
    {true?<BottomNav/>:<></>}
    </NavigationContainer>
  );
}


const headerNone = {
  headerShown:false
}