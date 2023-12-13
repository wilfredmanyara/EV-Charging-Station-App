import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
        <Tab.Screen name='home' component={HomeScreen} options={{
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarLabel:'Search',
          tabBarIcon:({color,size})=>(
            <Ionicons name="ios-search" size={size} color={color} />
          )
        }}/>
        
        
    </Tab.Navigator>
  )
}