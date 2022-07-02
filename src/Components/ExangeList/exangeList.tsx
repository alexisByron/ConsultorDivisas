import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { Icon } from 'react-native-elements'
import { Api } from '../../Services/ValorDenominaciones/api';

const ExangeList = ({ navigation }: any) => {
  const exanges = [
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
    let responseApi = await Api.getValueToday(item.key)
    try {
      const key = Object.keys(responseApi)[0];
      const data = responseApi[key][0];
      navigation.navigate('ValueToday', { Fecha: data.Fecha, Nombre: item.label, Valor: data.Valor, UMedida: item.denominacion })
    } catch (error) {
      Alert.alert(responseApi.message)
    }
  }

  return (
    <View >
      <Text style={styles.titleText}>Indicadores Economicos</Text>
      <FlatList
        data={exanges}
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
                  //name='info-outline'
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