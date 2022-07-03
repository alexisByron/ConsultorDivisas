import React, { useEffect } from 'react';
import { Alert, Dimensions, Text, View } from 'react-native';
import RemoveTime from '../Utils/date';
import { styles } from './styles';
import { LineChart } from 'react-native-chart-kit'

const ValueToday = ({ navigation, route }: any) => {
  const { Nombre, UMedida, ultimosRegistros } = route.params;
  const LasteRegister = ultimosRegistros[ultimosRegistros.length - 1];

  //SHOW ALERT 
  useEffect(() => {
    const date = new Date(LasteRegister.Fecha);
    const date2 = new Date();

    if (RemoveTime(date2) !== RemoveTime(date) && Nombre !== 'IPC' && Nombre !== 'UTM') {
      Alert.alert('No se ha cargado el registro del dia actual.', 'se mostrara el ultimo registro')
    }
  })

  /**
  * RETURN VALUE WHIT SIGN BY UMEDIDA
  * @returns {JSX.Element}
  */
  const UnidadMedidaStr = () => {
    switch (UMedida) {
      case 'Pesos': return <Text>$ {LasteRegister.Valor}</Text>
      case 'Porcentaje': return <Text>{LasteRegister.Valor} %</Text>
    }
  }

  //CHART DATA
  let datesToChart: any = [];
  let valuesToChart: any = [];
  const currentDay = new Date();
  //SET CHART DATA
  ultimosRegistros.map((element: any) => {
    const dateElement = new Date(element.Fecha);
    if (RemoveTime(dateElement) < RemoveTime(currentDay)) {
      const dateAux = element.Fecha.substring(5, element.Fecha.length);
      datesToChart.push(dateAux)
      const valueAux = parseFloat(element.Valor.replace(',','.'));
      valuesToChart.push(valueAux)
    }
  })

  const dataChart = {
    labels: datesToChart,
    datasets: [
      {
        data: valuesToChart
      },
    ],
  };

  return (
    <View>
      <Text style={styles.denominatinText}>{UnidadMedidaStr()}</Text>
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

      <View style={styles.chartView}>
        <LineChart
          data={dataChart}
          width={Dimensions.get('window').width}
          height={300}
          yAxisLabel={UMedida === 'Pesos' ? '$' : '%'}
          chartConfig={{
            backgroundGradientFrom: 'darkblue',
            backgroundGradientTo: 'blue',
            color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
          }}
          verticalLabelRotation={30}
        />
      </View>

    </View>
  );
}

export default ValueToday;