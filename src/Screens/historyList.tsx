import React from 'react';
import { Text, View } from 'react-native';
import HistoryListComponent from '../Components/HistoryList/historyListComponent';

//page HistoryList showing a list component with history info from exchange

const HistoryList = ({ navigation, route }: any) => {
  const history = route.params.dataHistory
  const exange = route.params.name
  return (
    <View >
      <Text style={{
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 10,
        color: 'black'
      }}>{exange}</Text>
      <HistoryListComponent info={history} />
    </View>
  );
}

export default HistoryList;