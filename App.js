import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { News, Home, DetailNews } from './screens';
import { StatusBar } from 'expo-status-bar';
// import { NativeBaseProvider, extendTheme} from "native-base";


const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    const headerStyle = {
      headerTitleStyle: { color: "white" },
      headerStyle: {
        backgroundColor: "#AA0002",
      },
      headerTintColor: "white",
    };
    return (
      <NavigationContainer>
        <StatusBar style='auto' color= "#FFFFFF" backgroundColor='#B20819' />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
          <Stack.Screen name="News" component={News} options={{ headerTitle: 'Berita Terkini', 
          ...headerStyle,
          }}/>
          <Stack.Screen name="DetailNews" component={DetailNews} options={{ headerTitle: 'Detail Berita', 
          ...headerStyle,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;
