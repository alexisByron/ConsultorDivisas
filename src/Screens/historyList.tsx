import React from 'react';
import { FlatList, Text, View } from 'react-native';
import HistoryListComponent from '../Components/HistoryList/historyListComponent';
//import { styles } from './styles';

const HistoryList = ({ navigation, route }:any) => {
const history = route.params.dataHistory
const exange = route.params.name
  return (
    <View >
      <Text style={{ fontSize: 30,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    color:'black'}}>Valor Historico {exange}</Text>
      <HistoryListComponent info={history}/>
    </View>
  );
}

export default HistoryList;