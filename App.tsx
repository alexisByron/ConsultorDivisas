/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import ExangeList from './src/Components/ExangeList/exangeList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryList from './src/Screens/historyList';
import ValueToday from './src/Screens/valueToday';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ExangeList} />
        <Stack.Screen name="ValueToday" component={ValueToday} />
        <Stack.Screen name="HistoryList" component={HistoryList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
