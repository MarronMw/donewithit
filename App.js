import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AccountScreen from './app/screens/AccountScreen'
import AppButton from './app/components/AppButton'
import AppNavigator from './app/navigation/AppNavigator'
import AunthNavigator from './app/navigation/AunthNavigator'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import navigationTheme from './app/navigation/navigationTheme'
import Screen from './app/components/Screen'
import WelcomeScreen from './app/screens/WelcomeScreen'

//navs main
const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();

//composition of the screens
const StackNavigator=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen name='Listings' component={ListingsScreen}/>
      <Stack.Screen name='ListingDetails' component={ListingDetailsScreen}/>
    </Stack.Navigator>
  );
}

//custom NavBar Button
const AddButton=({color})=>{
  return <View style={styles.addButton}>
    <View style={styles.tomatoCircle}>
      <View style={styles.whiteCircle}>
        <Text style={styles.addText}>+</Text>
      </View>
    </View>
  </View>
}

const TabNavigator=()=>{
  return <Tab.Navigator
    screenOptions={
      {
        tabBarActiveTintColor:'tomato'
      }
    }
  >
    <Tab.Screen name='Feed' component={StackNavigator} options={
        {
            headerShown:false,
            tabBarIcon:({size,color})=><MaterialCommunityIcons name='home' size={size} color={color}/>
          }
          }
          />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} options={
      {
        // tabBarIcon:({color,size})=><MaterialCommunityIcons name='plus' color={color} size={size}/>,
        tabBarIcon:({color})=><AddButton color={color}/>,
      }
    }/>
    <Tab.Screen name='Account' component={AccountScreen} options={
      {
        tabBarIcon:({size,color})=><MaterialCommunityIcons name='account' size={size} color={color}/>
      }
    }/>
  </Tab.Navigator>
}


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AunthNavigator/> */}
      <AppNavigator/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  addButton:{
    justifyContent:'center',
    alignItems:'center',
  },
  tomatoCircle:{
    backgroundColor:'tomato',
    padding:10,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  whiteCircle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    textAlign:'center',
    height:20,
    width:20,
    borderRadius:10,
  },
  addText:{
    color:'tomato',
    textAlign:'center',
    alignSelf:'center'
  }

})