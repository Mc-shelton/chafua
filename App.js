import {React,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import BottomNav from './src/components/bottomNav';
import TopHeader from './src/components/topHeader';
import props from './src/props/props';


const Stack = createNativeStackNavigator()

export default function App() {
  useEffect(()=>{
    console.log(props.categList)
  })
  return (
    <NavigationContainer>
      <TopHeader/>
    <Stack.Navigator>
      <Stack.Screen 
      name = 'Home'
      component = {Home}
      options={headerNone}
      />
    </Stack.Navigator>
    <BottomNav/>
    </NavigationContainer>
  );
}


const headerNone = {
  headerShown:false
}