import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './styles';

const ValueToday = ({ navigation, route }:any) => {
  const {Fecha,Valor,Nombre,UMedida} = route.params; 
  return (
    <View>
      <Text style={styles.denominatinText}>{Valor}</Text>
      <View style={styles.row}> 
        <Text style={[styles.textSecondary,styles.flex1]}>Nombre</Text>
        <Text style={[styles.textSecondary,styles.flex1]}>{Nombre}</Text>
      </View>
      <View style={styles.row}> 
        <Text style={[styles.textSecondary,styles.flex1]}>Fecha</Text>
        <Text style={[styles.textSecondary,styles.flex1]}>{Fecha}</Text>
      </View>
      <View style={styles.row}> 
        <Text style={[styles.textSecondary,styles.flex1]}>Unidad de medida</Text>
        <Text style={[styles.textSecondary,styles.flex1]}>{UMedida}</Text>
      </View>
    </View>
  );
}

export default ValueToday;