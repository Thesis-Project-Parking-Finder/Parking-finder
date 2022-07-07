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
        <View style={styles.Group6107}>
          <Text style={styles.Txt321}>Select The Vehicle Type </Text>
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
              uri: "https://cdn.xxl.thumbs.canstockphoto.com/a-big-delivery-truck-isolated-on-white-stock-images_csp2474535.jpg",
            }}
          />
        </View>
        <View style={styles.Group440}>
          <View style={styles.Group286}>
            <View style={styles.Group34}>
              <Text style={styles.Txt447}>Medium Size</Text>
            </View>
            {/* <View style={styles.Group70}></View> */}
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
              uri: "https://catalogue.automobile.tn/big/2021/01/46499.jpg?t=1655500815",
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
              uri: "https://upload.wikimedia.org/wikipedia/commons/7/74/Megelli_Sports_motorcycle.jpg",
            }}
          />
        </View>
        {/* <View style={styles.Group459}>
          <Text style={styles.Txt469}>Continue</Text>
        </View> */}
      </View>
      <View style={styles.btncontainer}>
        <Button
          title="go back"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
        <Button
          title="Continue"
          onPress={() => {
            dispatch(ParkingNameAndAdress(bookingReview));
            navigation.navigate("FillCarInformation");
          }}
        ></Button>
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
    borderRadius: 50,
    bottom: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    // backgroundColor: "yellow",
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
    // position: "absolute",
    // top: 73,
    // none: "0px",
    width: "100%",
    height: "90%",
    // backgroundColor: "pink",
    top: "10%",
  },
  Group6107: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 31,
    left: 30,
  },
  Frame: {
    width: 26,
    height: 18,
    marginRight: 19,
  },
  Txt321: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
  },

  Group616: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 26,
    paddingBottom: 25,
    paddingLeft: 138,
    paddingRight: 32,
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
  },
  Group33: {
    position: "relative",
    marginRight: 111,
    width: 73,
    height: 40,
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
  Txt957: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 73,
    height: 23,
  },

  Ellipse40: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 17,
    height: 17,
    borderRadius: 8.5,
  },

  Group440: {
    position: "relative",
    bottom: 26,
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(58, 107, 204, 1)",
    width: "95%",
    height: 93,
    left: "3%",
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
  Txt987: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(53,53,53,0.5)",
    width: 55,
    height: 17,
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

  //   Group70: {
  //     // borderRadius: 8.5,
  //     // backgroundColor: "rgba(188,0,99,1)",
  //     // borderWidth: 1.5,
  //     // borderStyle: "solid",
  //     // borderColor: "rgba(188,0,99,1)",
  //     width: 17,
  //     height: 17,
  //   },

  KisspngToyotaLandCruiserPradoCarToyota86SportUtilToyotaLandCruiserWhiteCar5a755aed9f9d351:
    {
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
  KisspngCarClipArtAudiQ3Car5a74c1dadf5c361: {
    width: 111,
    height: 53,
    marginRight: 14,
  },
  Group35: {
    position: "relative",
    marginRight: 96,
    width: 88,
    height: 40,
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
  Txt339: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 88,
    height: 23,
  },

  Ellipse41: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 17,
    height: 17,
    borderRadius: 8.5,
  },

  Group869: {
    position: "relative",
    marginBottom: 32,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
    width: 373,
    height: 93,
  },
  Group967: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 27,
    none: "0px",
    width: 200,
    height: 40,
  },
  Group36: {
    position: "relative",
    marginRight: 101,
    width: 82,
    height: 40,
  },
  Txt368: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(53,53,53,0.5)",
    width: 56,
    height: 17,
  },
  Txt605: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 82,
    height: 23,
  },

  Ellipse42: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 17,
    height: 17,
    borderRadius: 8.5,
  },

  Kisspng2017TeslaModelXTeslaModelSTeslaMotorsSporTeslaModelXWhiteCar5a751d40cd80f71:
    {
      position: "absolute",
      top: 21,
      left: 124,
      width: 116,
      height: 46,
    },

  Group2105: {
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 115,
    paddingRight: 112,
    marginBottom: 163,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,0.1)",
    width: 373,
    height: 53,
  },
  Txt654: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group459: {
    postion: "relative",
    // paddingTop: 16,
    // paddingBottom: 14,
    // paddingLeft: 130,
    // paddingRight: 127,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: "60%",
    height: 53,
    alignItems: "center",
    left: "20%",
    top: "10%",
  },
  Txt469: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    top: "26%",
  },
  btncontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",

    width: Dimensions.get("window").width,
    bottom: -40,
  },
});
