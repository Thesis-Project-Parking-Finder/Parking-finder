import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  TouchableRipple,
  Colors,
  Checkbox,
  useTheme,
  Button,
} from "react-native-paper";
import Lottie from "lottie-react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

const BookingReview = ({ navigation }) => {
  let data = useSelector((state) => state.bookplace.value);
  const [globalState, setglobalState] = useState(data);
  let TotalPrice = globalState.Price * globalState.Duration;
  let totalcoins = TotalPrice * 100;

  const [checkedCustom, setCheckedCustom] = React.useState(false);
  const [checkedCustom2, setCheckedCustom2] = React.useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <View style={styles.Group97}>
      {console.log(globalState)}
      <View style={styles.Frame218}>
        <TouchableRipple onPress={() => navigation.navigate("ParkingSpot_1")}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableRipple>
        <Text style={styles.Txt3107}>Booking review</Text>
      </View>

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

      <View style={styles.Wrapper}>
        <Text style={styles.price}>
          {globalState.Price} Dt * {globalState.Duration} hours = {TotalPrice}{" "}
          Dt
        </Text>
        <Text style={styles.enTnd}> TND</Text>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.enpp}> Parki Points</Text>
        <Text style={styles.amountpp}> {totalcoins}</Text>
        <Image
          source={{ uri: "https://img.icons8.com/ultraviolet/344/ruble.png" }}
          style={styles.image}
        />
      </View>
      {/*  */}
      <View style={styles.Frame255}>
        <TouchableRipple
          style={[styles.Group253, Colors.blue900]}
          onPress={() => {
            checkedCustom
              ? setCheckedCustom2(false)
              : setCheckedCustom2(!checkedCustom2);
          }}
        >
          <View style={styles.Group251}>
            <View style={styles.Group249}>
              <Image
                source={{
                  uri: "https://img.icons8.com/cotton/344/ruble--v2.png",
                }}
                style={styles.imageM}
              />
              <View style={styles.Group73}>
                <Text style={styles.Txt829}>Parking Coin</Text>
              </View>
            </View>
            {/* <View style={styles.Ellipse44} /> */}
            <TouchableRipple
              onPress={() => {
                checkedCustom
                  ? setCheckedCustom2(false)
                  : setCheckedCustom2(!checkedCustom2);
              }}
            >
              <View style={styles.Ellipse44}>
                <View pointerEvents="none">
                  <Checkbox
                    color={Colors.blue900}
                    status={checkedCustom2 ? "checked" : "unchecked"}
                  />
                </View>
              </View>
            </TouchableRipple>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.Frame256}>
        {/* <View style={styles.Txt1002}>
            <Text style={styles.Txt3109}>Choose Payment Methods:</Text>
        </View> */}

        <TouchableRipple
          style={[styles.Group252, Colors.green500]}
          onPress={() => {
            checkedCustom2
              ? setCheckedCustom(false)
              : setCheckedCustom(!checkedCustom);
          }}
        >
          <View style={styles.Group251}>
            <View style={styles.Group249}>
              <Image
                source={{
                  uri: "https://img.icons8.com/dusk/452/banknotes.png",
                }}
                style={styles.imageC}
              />
              <View style={styles.Group73}>
                <Text style={styles.Txt829}>Cache Money</Text>
              </View>
            </View>
            {/* <View style={styles.Ellipse44} /> */}
            <TouchableRipple
              onPress={() => {
                checkedCustom2
                  ? setCheckedCustom(false)
                  : setCheckedCustom(!checkedCustom);
              }}
            >
              <View style={styles.Ellipse44}>
                <View pointerEvents="none">
                  <Checkbox
                    color={Colors.green500}
                    status={checkedCustom ? "checked" : "unchecked"}
                  />
                </View>
              </View>
            </TouchableRipple>
          </View>
        </TouchableRipple>
      </View>

      <TouchableRipple style={styles.Frame224} onPress={() => setShow(!show)}>
        <Text
          style={styles.Txt351}
          onPress={() => navigation.navigate("ticket")}
        >
          Continue
        </Text>
      </TouchableRipple>
    </View>
  );
};
const styles = StyleSheet.create({
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    // backgroundColor: "#F5FCFF",
    // top: "-100%",
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
    bottom: "0.2%",
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
  Wrapper: {
    transform: [{ translateY: 160 }, { translateX: -10 }],
  },
  price: {
    // position: "absolute",
    // fontSize: 15,
    // left: "50%",
    // width: 300,
    // top: "68%",

    fontSize: 15,
    left: "50%",
    width: 300,
    top: "70%",
    fontWeight: "500",
    color: "#104685",
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  enTnd: {
    // position: "absolute",
    // fontSize: 15,
    // left: "20%",
    // width: 300,
    // top: "68%",

    // position: "absolute",
    fontSize: 15,
    left: "20%",
    width: 300,
    top: "60%",
    fontWeight: "500",
  },
  amountpp: {
    // position: "absolute",
    // fontSize: 15,
    // left: "60%",
    // width: 300,
    // top: "74%",

    // position: "absolute",
    fontSize: 15,
    left: "60%",
    width: 300,
    top: "65%",
    fontWeight: "500",
    color: "#104685",
  },
  enpp: {
    // position: "absolute",
    // fontSize: 15,
    // left: "20%",
    // width: 300,
    // top: "74%",

    // position: "absolute",
    fontSize: 15,
    left: "20%",
    width: 300,
    top: "75%",
    fontWeight: "500",
  },
  image: {
    width: "10%",
    height: "17%",
    resizeMode: "cover",
    // position: "absolute",
    top: "52%",
    left: "80%",
  },
  Group545: {
    position: "absolute",
    height: "50%",
    top: "17%",
    left: "8%",
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
    fontWeight: "700",
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
  Frame255: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    height: "0%",
    top: "41%",
  },
  Group253: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingLeft: 34,
    paddingRight: "1%",
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "#F5FCFF",
    width: "90%",
    height: 70,
    // top:'0%',
    marginLeft: "20%",
  },
  Group251: {
    display: "flex",
    flexDirection: "row",
  },
  Group249: {
    display: "flex",
    flexDirection: "row",
    marginRight: 118,
  },
  imageC: {
    width: "40%",
    height: "120%",
    // marginRight:58,
    // marginLeft:'-20%',
    transform: [{ translateX: -30 }],
    top: "-5%",
  },
  imageM: {
    width: "40%",
    height: "120%",
    // marginRight:58,
    // marginLeft:'-20%',
    transform: [{ translateX: -30 }],
    top: "-5%",
  },
  Group73: {
    width: "100%",
    height: "100%",
    // marginRight:-100
  },
  Txt829: {
    // width: '100%',
    // height:'100%',
    fontSize: 20,
    transform: [{ translateX: -20 }],
    // marginRight:-4,
    fontWeight: "800",
    color: "rgba(53,53,53,1)",
    // top:'147%'
  },
  Ellipse44: {
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "rgba(188,0,99,1)",
    // width: 17,
    // height: 17,
    // borderRadius: 8.5,
    marginLeft: -75,
    top: "-10%",
  },
  Frame256: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    height: "0%",
    top: "55%",
  },
  Group252: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingLeft: 34,
    paddingRight: "1%",
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "#F5FCFF",
    width: "90%",
    height: 70,
    // top:'-10%',
    marginLeft: "20%",
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
