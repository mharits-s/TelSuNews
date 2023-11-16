import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { News, Home, DetailNews } from './screens';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, HStack} from "native-base";
import SwitchToggle from 'react-native-switch-toggle';
import { LightTheme, DarkTheme } from './components/colors';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  }

  render() {
    const headerBackgroundColor = this.state.isDarkMode
      ? DarkTheme.headerBackground
      : LightTheme.headerBackground;
    const headerTintColor = this.state.isDarkMode
      ? LightTheme.text
      : DarkTheme.text;

    const screenOptions = {

      headerRight: () => (
        <HStack space={2} alignItems="center" pr={2}>
          <SwitchToggle
            containerStyle={{
              width: 50,
              height: 30,
              borderRadius: 25,
              backgroundColor: '#e4e3e3',
              padding: 5,
            }}
            circleStyle={{
              width: 25,
              height: 25,
              borderRadius: 12.5,
              backgroundColor: 'white',
            }}
            switchOn={this.state.isDarkMode}
            onPress={this.toggleDarkMode}
          />
        </HStack>
      ),
      cardStyle: { backgroundColor: this.state.isDarkMode ? DarkTheme.background : LightTheme.background },
    };

    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar style='auto' />
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false}}/>
            <Stack.Screen name="News" component={News}
            options={{
              headerTitle: 'Berita Terkini',
              headerStyle: {
                backgroundColor: headerBackgroundColor,
              },
              headerTintColor: headerTintColor,}}/>
            <Stack.Screen name="DetailNews" component={DetailNews}
            options={{
              headerTitle: 'Detail Berita',
              headerStyle: {
                backgroundColor: headerBackgroundColor,
              },
              headerTintColor: headerTintColor,}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;