import React from 'react';
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
        <Stack.Screen name="Home" component={ExangeList} options={{title:'Indicadores Económicos'}}/>
        <Stack.Screen name="ValueToday" component={ValueToday} options={{title:'Información Actual'}}/>
        <Stack.Screen name="HistoryList" component={HistoryList} options={{title:'Valor Histórico'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
