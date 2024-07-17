import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home.tsx';
import Login from './src/pages/Login.tsx';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
