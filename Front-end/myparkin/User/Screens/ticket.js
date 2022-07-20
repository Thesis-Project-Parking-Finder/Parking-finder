import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { auth } from "../../firebase.config";
export default function Frame2551({ navigation }) {
  let data = useSelector((state) => state.bookplace.value);
  const [globalState, setglobalState] = useState(data);

  return (
    <View style={styles.Frame268}>
      {console.log(globalState)}
      <View style={styles.Frame255}>
        <Text style={styles.Txt961}>Parking Ticket</Text>
      </View>
      <View style={styles.Group95}>
        <View style={styles.Frame2661}>
          <View style={styles.Frame256}>
            <View style={styles.Group255}>
              <Image
                style={styles.Group}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/i1d1lcejo0o-75%3A108?alt=media&token=364549f2-6e4d-4d70-a18c-16cd8778d5df",
                }}
              />
            </View>
          </View>
          <View style={styles.Frame266}>
            <View style={styles.key}>
              <Text style={styles.Txt327}>Name</Text>
              <Text style={styles.Txt327}>Vehicle type</Text>
              <Text style={styles.Txt327}>Date</Text>
              <Text style={styles.Txt327}>Parking Area</Text>
              <Text style={styles.Txt327}>Parking Spot</Text>
              <Text style={styles.Txt327}>Duration</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.Txt876}>{globalState.User_fullName}</Text>
              <Text style={styles.Txt876}>{globalState.CarType}</Text>
              <Text style={styles.Txt876}>{globalState.Date}</Text>
              <Text style={styles.Txt876}>{globalState.ParkingName}</Text>
              <Text style={styles.Txt876}>{globalState.ParkingSpot}</Text>
              <Text style={styles.Txt876}>{globalState.Duration} H </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Group267}>
        <Text onPress={() => navigation.navigate("Map")} style={styles.Txt667}>
          Navigate to Parking Lot
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Frame2551: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 428,
    height: 926,
    backgroundColor: "blue",
  },
  Iphone13ProMax38: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 73,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 35,
    borderRadius: 50,
    backgroundColor: "orange",
  },
  Frame268: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: "5%",
    width: "100%",
  },
  Frame255: {
    left: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  Frame: {
    width: 26,
    height: 18,
    marginRight: 6,
  },
  Txt961: {
    fontSize: 29,
    // lef: "30%",

    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    marginRight: 6,
  },
  Group87: {
    paddingTop: 10.5,
    paddingBottom: 10.5,
    paddingLeft: 5.5,
    paddingRight: 5.5,
    borderRadius: 14,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: "orange",
    width: 28,
    height: 28,
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,1)",
    width: 12,
    height: 2.4,
  },
  Ellipse22: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.4,
    height: 2.4,
    borderRadius: 1,
    marginRight: 8,
  },
  Ellipse24: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.4,
    height: 2.4,
    borderRadius: 1,
  },

  Group95: {
    paddingTop: 0,
    paddingBottom: 0.08,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 53,
    width: 371,
    height: 610.08,
    // backgroundColor: "blue",
  },
  Frame2661: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Frame256: {
    // position: "absolute",
    top: "5%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 66,
    paddingRight: 66,
    borderRadius: 23,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    left: "3.5%",
  },
  Group255: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0.08,
    paddingLeft: 0,
    paddingRight: 0,
    // backgroundColor: "orange",
  },
  Group: {
    width: 219.15,
    height: 219.08,
  },

  Frame266: {
    left: "4%",
    top: "8%",
    width: 350,
    height: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flexWrap: "wrap",
    paddingTop: 21,
    paddingBottom: 21,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 23,
    // backgroundColor: "blue",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
  },

  Txt876: {
    fontSize: 18,
    // width:150,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    // backgroundColor:"blue"
  },

  Group258: {
    display: "flex",
    flexDirection: "column",
  },
  Txt327: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
  },

  Group267: {
    position: "absolute",
    bottom: 0,
    left: "8%",
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 69,
    paddingRight: 66,
    borderRadius: 50,
    backgroundColor: "rgba(58, 107, 204, 1)",
    width: 337,
    height: 53,
  },
  Txt667: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
});
