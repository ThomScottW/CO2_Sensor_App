import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sensing from "./screens/Sensing";

export default function App() {
  return (
    <View style={styles.container}>
      <Sensing/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
