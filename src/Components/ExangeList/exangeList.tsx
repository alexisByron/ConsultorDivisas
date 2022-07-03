import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { Icon } from 'react-native-elements'
import { Api } from '../../Services/ValorDenominaciones/api';

const ExangeList = ({ navigation }: any) => {
  //data dummy to use as exchanges
  const exchanges = [
    { label: 'Dólar', denominacion: 'Pesos', key: 'dolar' },
    { label: 'Euro', denominacion: 'Pesos', key: 'euro' },
    { label: 'IPC', denominacion: 'Porcentaje', key: 'ipc' },
    { label: 'UF', denominacion: 'Pesos', key: 'uf' },
    { label: 'UTM', denominacion: 'Pesos', key: 'utm' },
  ];

  const onPressExange = async (item: any) => {
    let responseApi = await Api.getValueByDate(item.key);
    try {
      if (responseApi.statusCode != 404) {
        const key = Object.keys(responseApi)[0];
        navigation.navigate('HistoryList', { dataHistory: responseApi[key], name: item.label })
      } else {
        Alert.alert(responseApi.message)
      }
    } catch (error) {
      Alert.alert(responseApi.message)
    }

  }

  const onPressIcon = async (item: any) => {
  
   const responseApi = await Api.getValueAfterDate(item.key)

    if (responseApi.statusCode === 404) {
      Alert.alert('No se ha cargado el registro del dia actual.', 'intente mas tarde')
    } else {
      const key = Object.keys(responseApi)[0];
      const lastRegisters = responseApi[key];
      navigation.navigate('ValueToday', { Nombre: item.label, UMedida: item.denominacion, ultimosRegistros: lastRegisters })
    }

  }

  return (
    <View >
      <FlatList
        data={exchanges}
        renderItem={({ item }) =>
          <View style={styles.listElement} >
            <Pressable style={styles.flex1} onPress={() => onPressExange(item)}>
              <Text style={styles.exangeText}>{item.label}</Text>
              <Text style={styles.denominatinText} >{item.denominacion}</Text>
            </Pressable>
            <Pressable style={styles.iconsContent} onPress={() => onPressIcon(item)}>
              <View style={styles.row}>
                <Icon
                  name='info-outline'
                  type='MaterialIcons'
                  color='#517fa4'
                  tvParallaxProperties={null}
                />
                <Icon
                  name='keyboard-arrow-right'
                  type='MaterialIcons'
                  color='#898a88'
                  tvParallaxProperties={null}
                />
              </View>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

export default ExangeList;