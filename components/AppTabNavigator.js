import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../screens/BookD';
import BookRequestScreen from '../screens/BookR';





export const AppTabnavigator=createBottomTabNavigator({
    Home:{screen:BookDonateScreen,
        navigationOptions :{
            tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Donate Books",
          }
    
    
    
    },
    Request:{screen:BookRequestScreen,
        navigationOptions :{
            tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
            tabBarLabel : "Book Request",
          }
    
    }
})