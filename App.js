import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import CartProvider from './src/contexts/CartContext';
import Home from './src/Pages/Home/index';
import Cart from './src/Pages/Cart/index';
import Login from './src/components/login'

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('./src/img/splash.jpg')}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Cart" component={Cart} options={{ headerTitle: 'Mnhas Compras' }} />
          <Stack.Screen name="Home" component={Home}  options={{ headerTitle: 'Início' }} />
          <Stack.Screen name="Login" component={Login}  options={{ headerTitle: 'Login' }} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a7d50',
    width: '100%',
    height: '100%',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});
