// TemperatureDetails.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TemperatureDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Details</Text>
      <Text>This is the temperature details screen. Add your content here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TemperatureDetails;
