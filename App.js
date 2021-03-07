/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import PostScreen from './src/containers/posts'
import UserDetail from './src/containers/user/UserDetail'
import PostDetail from './src/containers/posts/PostDetail'
import { Provider } from 'react-redux';
import { store } from './src/services';

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={PostScreen} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
     </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
