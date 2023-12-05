import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useRoute } from '@react-navigation/native';

const Co2Details = () => {
  const route = useRoute();

  // Get the co2ConcentrationHistory prop from the route
  const co2ConcentrationHistory = route.params?.co2ConcentrationHistory || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CO2 Concentration History</Text>
      <View>
        {co2ConcentrationHistory.length > 0 ? (
          <LineChart
            data={{
              labels: co2ConcentrationHistory.map((_, index) => index.toString()),
              datasets: [
                {
                  data: co2ConcentrationHistory,
                },
              ],
            }}
            width={350}
            height={200}
            yAxisSuffix=" ppm"
            chartConfig={{
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'black',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        ) : (
          <Text style={styles.dataText}>No CO2 concentration history available.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: 'white',
  },
  dataText: {
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'center',
    color: 'white',
    marginVertical: 5,
  },
});

export default Co2Details;
