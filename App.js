import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { News, Home, DetailNews } from './screens';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme, HStack} from "native-base";
import SwitchToggle from 'react-native-switch-toggle';


const Stack = createNativeStackNavigator();

const theme = extendTheme({
  colors: {
    darkMode: {
      white: '#FFFFFF',
      black: '#000000',
      100: '#FAFAFA',
      200: '#D9D9D9',
      300: '#BFBFBF',
      400: '#A6A6A6',
      500: '#8C8C8C',
      600: '#737373',
      700: '#595959',
      800: '#404040',
      900: '#131313',
    },
    brandColors: {
      red: '#B20819',
      gold: '#D4AF37'
    },
  },
});

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
    ? theme.colors.brandColors['gold']
    : theme.colors.brandColors['red'];

    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style='auto' />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
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
              }}
            />
            <Stack.Screen
              name="News"
              component={News}
              initialParams={{ isDarkMode: this.state.isDarkMode }}
              options={{
                headerTitle: 'Berita Terkini',
                headerStyle: {
                  backgroundColor: headerBackgroundColor,
                },
                headerTintColor: theme.colors.white,
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
              }}
            />
            <Stack.Screen
              name="DetailNews"
              component={DetailNews}
              options={{
                headerTitle: 'Detail Berita',
                headerStyle: {
                  backgroundColor: headerBackgroundColor,
                },
                headerTintColor: theme.colors.white,
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
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;