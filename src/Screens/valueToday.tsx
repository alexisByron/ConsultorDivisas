import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import RemoveTime from '../Utils/date';
import { styles } from './styles';

const ValueToday = ({ navigation, route }: any) => {
  const { Nombre, UMedida, ultimosRegistros } = route.params;
  //console.log('ultimosRegistros',ultimosRegistros)

  const LasteRegister = ultimosRegistros[ultimosRegistros.length - 1];
  //console.log(LasteRegister)

  const date = new Date(LasteRegister.Fecha);
  const date2 = new Date();

  console.log(LasteRegister.Fecha,date,date2);

  /*if (RemoveTime(date2) != RemoveTime(date)) {
    Alert.alert('No se ha cargado el registro del dia actual, se mostrara el ultimo registro')
  }*/
  

  return (
    <View>
      <Text style={styles.denominatinText}>{LasteRegister.Valor}</Text>
      <View style={styles.row}>
        <Text style={[styles.textSecondary, styles.flex1]}>Nombre</Text>
        <Text style={[styles.textSecondary, styles.flex1]}>{Nombre}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.textSecondary, styles.flex1]}>Fecha</Text>
        <Text style={[styles.textSecondary, styles.flex1]}>{LasteRegister.Fecha}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.textSecondary, styles.flex1]}>Unidad de medida</Text>
        <Text style={[styles.textSecondary, styles.flex1]}>{UMedida}</Text>
      </View>
    </View>
  );
}

export default ValueToday;