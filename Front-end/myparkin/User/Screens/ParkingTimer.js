import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";

export default function ParkingTimer() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const navigation = useNavigation();

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <SafeAreaView>
      <View style={styles.Frame218}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Map")}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.Txt3107}>Parking Timer</Text>
      </View>
      <View style={styles.container}>
        <CountdownCircleTimer
          isPlaying
          duration={10800}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7200, 6300, 3600, 0]}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>
              {children({ remainingTime })}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>
      <View style={styles.Frame249}>
        <View style={styles.Group248}>
          <View style={styles.Group241}>
            <Text style={styles.Txt528}>Parking Area</Text>
            <Text style={styles.Txt7310}>Parking Lot of Son Manolia</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt766}>Address</Text>
            <Text style={styles.Txt635}>9569, trantow Courts</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt936}>Vehicle</Text>
            <Text style={styles.Txt635}>Toyota Land Cru (AFD 6397)</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt830}>Parking Spot</Text>
            <Text style={styles.Txt635}>1st Floor (A05)</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt505}>Date</Text>
            <Text style={styles.Txt635}>May 11, 2023</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt398}>Duration</Text>
            <Text style={styles.Txt635}>4 hours</Text>
          </View>
          <View style={styles.Group247}>
            <Text style={styles.Txt766}>Hours</Text>
            <Text style={styles.Txt635}>09:00 AM - 13:00 PM</Text>
          </View>
        </View>
      </View>
      <TouchableRipple
        style={styles.Frame224}
        onPress={() => navigation.navigate("ExtendTime")}
      >
        <Text style={styles.Txt351}>Extend Parking Timer</Text>
      </TouchableRipple>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top: "10%",
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 19,
    // backgroundColor:'pink'
  },
  Txt3107: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "#104685",
    width: 282,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //   paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    top: "20%",
  },
  Frame249: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
    width: "100%",
    height: "100%",
    top: "35%",
  },
  Group248: {
    display: "flex",
    flexDirection: "column",
  },
  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt528: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 26,
  },
  Txt7310: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt766: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt936: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 54,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt830: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 115,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt505: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 180,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt398: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 197,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group247: {
    display: "flex",
    flexDirection: "row",
  },
  Txt766: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },
  Txt635: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },
  Frame224: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    // paddingTop: 15,
    paddingBottom: 15,
    // paddingLeft: 50,
    // paddingRight: 50,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    top: "-105%",
    width: "70%",
    height: "7%",
    transform: [{ translateX: 60 }, { translateY: 185 }],
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    top: "-1%",
  },
});
