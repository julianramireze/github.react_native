import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../../constants/routes';
import SplashScreen from '../../screens/splash_screen';
import HomeScreen from '../../screens/home_screen';
import UserScreen from '../../screens/user_screen';

const Stack = createStackNavigator();

const Router = () => {
  const navigationRef: any = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.splash}>
        <Stack.Screen name={Routes.splash} component={SplashScreen} />
        <Stack.Screen name={Routes.home} component={HomeScreen} />
        <Stack.Screen name={Routes.user} component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
