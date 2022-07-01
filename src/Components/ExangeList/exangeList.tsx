import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { Icon } from 'react-native-elements'
import { Api } from '../../Services/ValorDenominaciones/api';

const ExangeList = () => {
  const exanges = [
    { label: 'Dólar', denominacion: 'Pesos', key:'dolar'},
    { label: 'Euro', denominacion: 'Pesos' ,key:'euro'},
    { label: 'IPC', denominacion: 'Porcentaje' ,key:'ipc'},
    { label: 'UF', denominacion: 'Pesos' ,key:'uf'},
    { label: 'UTM', denominacion: 'Pesos' ,key:'utm'},
  ];

  const onPressExange = async (item: any) => {
    Alert.alert(`select ${item.label}`)

     //let a =await  Api.getValueToday(item.key)

     const date = Date.now;
     let a =await  Api.getValueByDate(date,item.key)
     console.log(a)
  }

  return (
    <View >
      <Text style={styles.titleText}>Indicadores</Text>
      <FlatList
        data={exanges}
        renderItem={({ item }) =>
          <Pressable style={styles.listElement} onPress={() => onPressExange(item)}>
            <View style={styles.flex1}>
              <Text style={styles.exangeText}>{item.label}</Text>
              <Text style={styles.denominatinText} >{item.denominacion}</Text>
            </View>
            <View style={styles.iconsContent}>
              <View style={styles.row}>
                <Icon
                  name='info-outline'
                  type='MaterialIcons'
                  color='#517fa4'
                  tvParallaxProperties={null}
                />
                <Icon
                  //name='info-outline'
                  name='keyboard-arrow-right'
                  type='MaterialIcons'
                  color='#898a88'
                  tvParallaxProperties={null}
                />
              </View>
            </View>
          </Pressable>
        }
      />
    </View>
  );
}

export default ExangeList;