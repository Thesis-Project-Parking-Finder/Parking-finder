import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
import { onAuthStateChanged } from "firebase/auth";
import Icon from "@expo/vector-icons/build/FontAwesome5";
import moment from "moment";

export default function ParkingTimer({ route }) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [as, setAs] = useState(0);
  const navigation = useNavigation();
  const [toggleTimer, settoggleTimer] = useState(false);
  // const [durationSec, setdurationSec] = useState(null)

  var currentTime = moment().format();
  function update() {
    const docRef = doc(db, "bookings", route.params.objBook.id);
    updateDoc(docRef, { status: "Completed" });
  }

  const Arrival = new Date(route.params.objBook.arrivalTime);
  const Current = new Date(currentTime);

  const diff = -Arrival.getTime() + Current.getTime();
  let a = 600;
  let msec = diff;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  const TimeLef = () => {
    if (diff >= 0) {
      const Substraction = hh * 3600 + mm * 60 + ss;
      return route.params.objBook.Duration * 3600 - Substraction;
    }
  };

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <SafeAreaView>
      {/* {console.log(hh * 3600 + mm * 60 + ss, "eeeeeeeeeeeee")} */}
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
      {diff > 0 ? (
        <View style={styles.container}>
          <CountdownCircleTimer
            onComplete={() => update()}
            initialRemainingTime={TimeLef()}
            isPlaying
            on
            duration={3600}
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
      ) : (
        <View style={styles.yourtime}>
          <Text style={styles.yourtimeText}>
            Your reservation starts at{" "}
            {route.params.objBook.arrivalTime.slice(16, -18)}
          </Text>
          <Icon name="clock" size={100} style={styles.icon}></Icon>
        </View>
      )}
      <View style={styles.Frame249}>
        <View style={styles.Group248}>
          <View style={styles.Group241}>
            <Text style={styles.Txt528}>Parking Area</Text>
            <Text style={styles.Txt7310}>
              {route.params.objBook.ParkingName}
            </Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt766}>Address</Text>
            <Text style={styles.Txt635}>{route.params.objBook.Adress}</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt936}>Vehicle</Text>
            <Text style={styles.Txt635}>{route.params.objBook.CarType}</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt830}>Parking Spot</Text>
            <Text style={styles.Txt635}>
              {route.params.objBook.ParkingSpot}
            </Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt505}>Date</Text>
            <Text style={styles.Txt635}>{route.params.objBook.Date}</Text>
          </View>
          <View style={styles.Group241}>
            <Text style={styles.Txt398}>Duration</Text>
            <Text style={styles.Txt635}>
              {route.params.objBook.Duration} Hours
            </Text>
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
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "#104685",
    width: 282,
  },
  yourtime: {
    position: "absolute",
    top: "18%",
    left: "13%",
    height: "25%",
    width: "100%",
    borderBottomColor: "black",
    // backgroundColor: "orange",
  },
  yourtimeText: {
    fontSize: 20,
    // color: "blue",
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
  icon: {
    position: "absolute",
    left: "25%",
    top: "23%",
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
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 26,
  },
  Txt7310: {
    position: "absolute",

    left: "40%",
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
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
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt936: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 54,
  },
  Txt635: {
    fontSize: 16,
    position: "absolute",
    left: "40%",
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
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 115,
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt505: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 180,
  },

  Group241: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt398: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 197,
  },

  Group247: {
    display: "flex",
    flexDirection: "row",
  },
  Txt766: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },

  Frame224: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 15,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    width: "70%",
    height: "7%",
    bottom: "10%",
    left: "15%",
  },
  Txt351: {
    fontSize: 16,
    bottom: 0,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
});
