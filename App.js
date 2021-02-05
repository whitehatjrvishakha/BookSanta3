
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppTabnavigator} from './components/AppTabNavigator'
import { SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,} from 'react-native-safe-area-context'


export default class App extends React.Component{
  render(){
  return (
   
    <SafeAreaProvider  style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
       <View style={styles.container}>
         <AppContainer/>
         </View>
    </SafeAreaProvider>
   

  );
}
}

/////////////////////////////////////////////////////////////////////////////
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  BottomTab:{screen:AppTabnavigator}
})


const AppContainer =createAppContainer(switchNavigator)





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
});
