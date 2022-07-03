import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableRipple } from "react-native-paper";

export default function SuccessfullyCreated() {
  const navigation = useNavigation();

  return (

      <View style={styles.Group219}>

      <View style={styles.Group218}>
      <Lottie style={styles.Group217} source={require('./assets/tickdone.json')} autoPlay loop />

        <View style={styles.Frame217}>
          <Text style={styles.Txt482}>Congratulations!</Text>
          <Text style={styles.Txt939}>Your account is created</Text>
        </View>
        <TouchableRipple style={styles.Group237} onPress={() => navigation.navigate("Map")}>
          <Text style={styles.Txt812}>Go to Homepage</Text>
        </TouchableRipple>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Rectangle25: {
        backgroundColor: "rgba(0,0,0,0.6)",
        width: 436,
        height: 926,
      },

  Group219: {
    paddingTop: 41,
    paddingBottom: 32,
    paddingLeft: 44,
    paddingRight: 34,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    
  },
  Group218: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:'80%',
    height:'70%',
    transform: [{ translateX:35 }, {translateY: 20}],

  },
  Group217: {
    width: "70%",
    height: "70%",
    marginBottom: 32,
    transform: [{ translateX:20 }, {translateY:47}],
  },
  Frame217: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor:'yellow'
  },
  Txt482: {
    fontSize: 32,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(8,44,89,1)",
    width: "100%",
    height: "100%",
    marginBottom: 20,
    // paddingTop:'7%'
  },
  Txt939: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(53,53,53,1)",
    marginTop:'-95%'
  },

  Group237: {
    paddingTop: 14,
    paddingBottom: 18,
    paddingLeft: 34,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(9,66,139,1)",
    width: "100%",
    height: "10%",
    marginTop:'-55%'
  },
  Txt812: {
    fontSize: 14,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: 20,
  },
})
