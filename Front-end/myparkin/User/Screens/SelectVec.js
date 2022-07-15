import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Button,
  Dimensions,
  AccessibilityInfo,
} from "react-native";
import { Footer } from "./Footer";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState, useEffect } from "react";
import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";

export default function ({ route, navigation }) {
  const data = useSelector((state) => state.bookplace.value);
  const dispatch = useDispatch();
  const [bookingReview, setbookingReview] = useState(data);
  const [carType, setcarType] = useState({
    Truck: "Truck",
    Medium_size: "Medium Size",
    Suv: "SUV",
    Bike: "Bike",
  });

  // useEffect(() => {
  //   console.log(data, "global state in selectVec");
  // }, []);

  return (
    <View style={styles.Iphone13ProMax30}>
      <View style={styles.Group046}>
        <View style={styles.Frame218}>
        <TouchableRipple onPress={() => {navigation.goBack()}}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableRipple>
        <Text style={styles.Txt3107}>Select The Vehicle Type</Text>
      </View>

        <View style={styles.Group440}>
          <View style={styles.Group286}>
            <View style={styles.Group34}>
              <Text style={styles.Txt447}>Truck</Text>
            </View>

            <BouncyCheckbox
              onPress={() => {
                setbookingReview((prevState) => ({
                  ...prevState,
                  CarType: carType.Truck,
                }));
              }}
              style={styles.Group70}
              fillColor="rgba(16, 181, 241, 0.8)"
            />
          </View>
          <Image
            style={
              styles.KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351
            }
            source={{
              uri: "https://p.kindpng.com/picc/s/126-1269870_semi-truck-png-semi-truck-transparent-background-png.png",
            }}
          />
        </View>
        <View style={styles.Group440}>
          <View style={styles.Group286}>
            <View style={styles.Group34}>
              <Text style={styles.Txt447}>Medium Size</Text>
            </View>
            <BouncyCheckbox
              onPress={() => {
                setbookingReview((prevState) => ({
                  ...prevState,
                  CarType: carType.Medium_size,
                }));
              }}
              style={styles.Group70}
              fillColor="rgba(16, 181, 241, 0.8)"
            />
          </View>
          <Image
            style={
              styles.KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351
            }
            source={{
              uri: "https://i.pinimg.com/originals/49/5c/b9/495cb9bd6f5611300d890037cb51d729.png"
            }}
          />
        </View>
        <View style={styles.Group440}>
          <View style={styles.Group286}>
            <View style={styles.Group34}>
              <Text style={styles.Txt447}>Suv</Text>
            </View>
            <BouncyCheckbox
              onPress={() => {
                setbookingReview((prevState) => ({
                  ...prevState,
                  CarType: carType.Suv,
                }));
              }}
              style={styles.Group70}
              fillColor="rgba(16, 181, 241, 0.8)"
            />
          </View>
          <Image
            style={
              styles.KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351
            }
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/41knei4xmdi-63%3A111?alt=media&token=d1b38693-1102-4ad7-8af2-f54e10439b96",
            }}
          />
        </View>
        <View style={styles.Group440}>
          <View style={styles.Group286}>
            <View style={styles.Group34}>
              <Text style={styles.Txt447}>Bike</Text>
            </View>

            <BouncyCheckbox
              onPress={() => {
                setbookingReview((prevState) => ({
                  ...prevState,
                  CarType: carType.Bike,
                }));
              }}
              style={styles.Group70}
              fillColor="rgba(16, 181, 241, 0.8)"
            />
          </View>
          <Image
            style={
              styles.KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351
            }
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/8/Yamaha-Sports-Bike-Background-PNG-Image.png",
            }}
          />
        </View>
      </View>
      <View style={styles.btncontainter}>
        <TouchableRipple style={styles.Frame178} onPress={() => {dispatch(ParkingNameAndAdress(bookingReview));
            navigation.navigate("FillCarInformation")}}>
        <Text style={styles.Txt191}>Continue</Text>
        </TouchableRipple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax30: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    bottom: 30,
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: "100%",
    top:'1%'
    // backgroundColor: "yellow",
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top: "-19%",
    left:'4%'
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 14,
    left: '-17%'
  },
  Txt3107: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "#104685",
    width: 282,
  },
  _5a3620812343531: {
    position: "absolute",
    top: 139,
    left: 36,
    width: 104,
    height: 86,
  },
  Group046: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "90%",
    top: "15%",
  },
  Txt376: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(53,53,53,0.5)",
    width: 58,
    height: 17,
  },
  Group440: {
    position: "relative",
    bottom: 26,
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "#EDFAFA",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(58, 107, 204, 1)",
    width: "95%",
    height: 93,
    left: "3%",
    top:'-2%'
  },
  Group286: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 27,
    none: "0px",
    width: 203,
    height: 40,
  },
  Group34: {
    position: "relative",
    marginRight: 37,
    width: 149,
    height: 40,
  },
  Txt447: {
    position: "absolute",
    top: 0,
    left: 50,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 149,
    height: 23,
  },
  KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351:{
      position: "absolute",
      top: 14,
      left: 220,
      width: 107,
      height: 65,
    },
    Group262: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 23,
    paddingLeft: 13,
    paddingRight: 32,
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
  },
  btncontainter: {
    bottom: 10,
    height: "20%",
    width: "60%",
    left:'20%',
    top:'4%'
  },
  Frame178: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: -100,
    paddingRight: 100,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    top:'-7%',
  },
  Txt191: {
    fontSize: 16,
    width:'100%',
    fontWeight: "700",
    color: "white",
    left:'380%'
  },
});
