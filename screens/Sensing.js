import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from "react";
import { db, ref, onValue } from "../firebase"

const Sensing = () => {

  // These allow us to set insert the values of these metrics into the text
  // displayed in the app.
  const [temperature, setTemperature] = useState(60);
  const [humidity, setHumidity] = useState(30);
  const [co2_concentration, setCo2Concentration] = useState(400);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      // The attributes after .val() are the keys in the firebase database.
      setCo2Concentration(snapshot.val().co2_concentration);
      setTemperature(snapshot.val().temperature);
      setHumidity(snapshot.val().humidity);
    })
  }, db)

  return (
    <View style={styles.data}>
      <Text style={styles.SensingTitle}>CO2 Sensing App</Text>
      <View style={styles.dataWrapper}>
        <View style={styles.co2}>
          <Text style={styles.title}>CO2 Concentration</Text>
          <Text style={styles.dataText}>{Math.round(co2_concentration)} ppm</Text>
        </View>

        <View style={styles.temperature}>
          <Text style={styles.title}>Temperature</Text>
          <Text style={styles.dataText}>{(temperature * 9 / 5 + 32).toFixed(2)}°F</Text>
        </View>

        <View style={styles.humidity}>
          <Text style={styles.title}>Humidity</Text>
          <Text style={styles.dataText}>{humidity.toFixed(2)}%</Text>
        </View>
      </View>
    </View>
  )
}

export default Sensing

const styles = StyleSheet.create({
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%"
  },
  dataWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "green",
    borderRadius: 20,
    borderWidth: 1,
  },
  dataText: {
    fontSize: 40,
    fontWeight: 100,
    textAlign: "center",
    color: "white",
    fontFamily: ""
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Helvetica",
    textAlign: "center",
    color: "white",
  },
  co2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: 'rgb(97, 96, 93)',
    margin: 30,
    width: "60%",
  },
  temperature: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgb(97, 96, 93)',
    margin: 30,
    width: "60%",
    borderRadius: 20,
  },
  humidity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgb(97, 96, 93)',
    margin: 30,
    width: "60%",
    borderRadius: 20,
  },
  SensingTitle: {
    color: "white",
    fontSize: 40,
    paddingTop: 70,
  },
})