// HumidityDetails.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HumidityDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Humidity Details</Text>
      <Text>This is the humidity details screen. Add your content here.</Text>
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

export default HumidityDetails;
