import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

interface dataInfo {
  info:[{Fecha:string, Valor: string}]
}

//Functional component to render a list
const HistoryListComponent: React.FC<dataInfo> = ({info}) => {
  const history:any = info;

  return (
    <View style={{maxHeight:600}}>
      <FlatList
        data={history}
        renderItem={({ item }) =>
            <View style={styles.listElement}>
              <Text style={[styles.date,styles.flex1]} >{item.Fecha}</Text>
              <Text style={[styles.value,styles.flex1]}>$ {item.Valor}</Text>
            </View>
        }
      />
    </View>
  );
}

export default HistoryListComponent;