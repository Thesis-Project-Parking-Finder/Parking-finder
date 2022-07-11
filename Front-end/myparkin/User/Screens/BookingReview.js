import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

const BookingReview = () => {
  let data = useSelector((state) => state.bookplace.value);
  const [globalState, setglobalState] = useState(data);
  let TotalPrice = globalState.Price * globalState.Duration;
  let totalcoins = TotalPrice * 100;
  return (
    <View style={styles.Group97}>
      <Text style={styles.Txt321}>Booking review </Text>
      {console.log(globalState)}
      <View style={styles.Group545}>
        <View style={styles.Group991}>
          <Text style={styles.Txt089}>Parking Area</Text>
          <Text style={styles.Txt153}>{globalState.ParkingName}</Text>
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt115}>Address</Text>
          <Text style={styles.Txt153}>{globalState.Adress}</Text>
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt688}>Vehicle type</Text>
          <Text style={styles.Txt153}>{globalState.CarType}</Text>
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt496}>Parking Spot</Text>
          <Text style={styles.Txt153}>{globalState.ParkingSpot}</Text>
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt956}>Date</Text>
          <Text style={styles.Txt153}>May 11, 2023</Text>
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt875}>Duration</Text>
          <Text style={styles.Txt153}>{globalState.Duration} Hours</Text>
        </View>
      </View>
      <Text style={styles.price}>
        {globalState.Price} Dt * {globalState.Duration} hours = {TotalPrice} Dt
      </Text>
      <Text style={styles.enTnd}> TND</Text>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.enpp}> Parki Points</Text>
      <Text style={styles.amountpp}> {totalcoins}</Text>
      <Image
        source={{ uri: "https://img.icons8.com/ultraviolet/344/ruble.png" }}
        style={{
          width: "10%",
          height: "5%",
          resizeMode: "cover",
          position: "absolute",
          top: "73%",
          left: "80%",
        }}
      />

      <View style={styles.Frame224}>
        <Text style={styles.Txt351}>Continue</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Group97: {
    display: "flex",
    flex: 1,
    paddingTop: 19,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 30,
    borderRadius: 23,
    // backgroundColor: "blue"
  },
  Frame224: {
    position: "absolute",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 128,
    paddingRight: 128,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    bottom: "5%",
    left: "10%",
  },
  imgCont: {
    position: "absolute",
    height: 100,
    width: 100,
    top: "74%",
    left: "60",
  },

  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 300,
    alignSelf: "center",
    // transform: [ {translateY:-110}]
    top: "70%",
  },
  price: {
    position: "absolute",
    fontSize: 15,
    left: "50%",
    width: 300,
    top: "68%",
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  enTnd: {
    position: "absolute",
    fontSize: 15,
    left: "20%",
    width: 300,
    top: "68%",
  },
  amountpp: {
    position: "absolute",
    fontSize: 15,
    left: "60%",
    width: 300,
    top: "74%",
  },
  enpp: {
    position: "absolute",
    fontSize: 15,
    left: "20%",
    width: 300,
    top: "74%",
  },
  Group545: {
    position: "absolute",
    height: "50%",
    top: "20%",
    left: "10%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "blue",
  },
  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt089: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 26,
  },
  Txt153: {
    position: "absolute",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
  },

  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt115: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },
  Txt321: {
    position: "absolute",
    top: "5%",
    left: "25%",
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
  },

  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt688: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 54,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt496: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 115,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt956: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 180,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group991: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt875: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 197,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Group735: {
    display: "flex",
    flexDirection: "row",
  },
  Txt115: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
  },
  Txt483: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },
});
export default BookingReview;
