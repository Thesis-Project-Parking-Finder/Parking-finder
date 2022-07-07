import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Button,
} from "react-native";
import Icon from "@expo/vector-icons/build/FontAwesome5";
import { useDispatch } from "react-redux";
import { ParkingNameAndAdress } from "../../redux/Features/BookPlace";

export default function ParkingDetail({ route, navigation }) {
  const [parkingName, setParkingName] = useState(route.params.parkingname);
  const [adress, setadress] = useState(route.params.adress);
  const dispatch = useDispatch();

  let updateStateAndNavigate = () => {
    dispatch(
      ParkingNameAndAdress({
        CarType: "",
        ParkingName: parkingName,
        Adress: adress,
        Floor: "",
        ParkingSpot: "",
        Date: "",
        Duration: "",
      })
    );
    navigation.navigate("SelectVec");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.Txt342}>Parking Details</Text>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{
              uri: route.params.parkingImage,
            }}
          />
        </View>
        <View style={styles.details}>
          <Icon name="address-book" size={20} style={styles.adress}></Icon>
          <Text style={styles.Txt1064}>{route.params.adress}</Text>
          <Icon name="phone" size={20} style={styles.phone}></Icon>
          <Text style={styles.Txt999}> +216 {route.params.number}</Text>
          <Text style={styles.textmoney}> {route.params.price}</Text>
          <Icon name="dollar-sign" size={20} style={styles.money}></Icon>
          <Icon name="car" size={20} style={styles.distance}></Icon>
          <Text style={styles.distance1}>
            {route.params.distance / 1000} Km away from you
          </Text>
        </View>
      </View>
      <View style={styles.btncontainter}>
        <Button
          title="go back"
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>

        <Button
          title="book now"
          onPress={() => {
            updateStateAndNavigate();
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    top: 30,

    width: "100%",
    height: "100%",
    // backgroundColor: "pink",
  },
  btn: {
    height: 100,
  },
  btncontainter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 50,
    height: "6%",
    width: "100%",
  },
  distance: {
    position: "absolute",
    bottom: 20,
    left: 10,
  },

  adress: {
    position: "relative",
    left: 10,
    top: 5,
  },
  phone: {
    position: "relative",
    top: 32,
    left: 10,
  },
  textmoney: {
    position: "relative",
    bottom: 30,
    left: 40,
  },
  details: {
    // backgroundColor: "pink",
    position: "relative",
    top: "43%",
    height: "40%",
    width: "100%",
    // backgroundColor: "orange",
  },
  distance1: {
    position: "absolute",
    bottom: 20,
    left: 40,
  },
  imagecontainer: {
    position: "absolute",
    top: 60,
    width: "100%",
    height: "30%",

    aspectRatio: 1,
    // backgroundColor: "red",
  },
  image: {
    height: "100%",
    width: "100%",

    resizeMode: "cover",
  },

  innercontainer: {
    width: "90%",
    height: "90%",
    // backgroundColor: "grey",
    left: 20,
  },

  Group887: {
    position: "absolute",
    bottom: 10,
    none: "0px",
    paddingTop: 21,
    paddingBottom: 50,
    paddingLeft: 148,
    paddingRight: 147,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
    width: "100%",
    height: "30%",
  },
  Txt1074: {
    position: "absolute",
    left: 120,
    fontSize: 16,
    top: "40%",

    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 41,
    height: 17,
  },

  Txt6106: {
    position: "absolute",
    fontSize: 14,
    bottom: 60,
    left: 120,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 120,
    height: 22,
  },
  Txt1077: {
    position: "absolute",
    bottom: 80,
    left: 140,
    fontSize: 24,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 200,
    height: 39,
  },

  Group63: {
    position: "absolute",
    top: 285,
    left: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  Txt1064: {
    position: "absolute",
    top: 0,
    left: 40,
    fontSize: 18,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    width: "80%",
    height: "40%",
  },
  Txt999: {
    position: "relative",
    top: 10,
    left: 40,
    fontSize: 15,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",

    color: "rgba(0,0,0,1)",
    width: "100%",
    height: "50%",
  },
  money: {
    position: "relative",
    bottom: 50,
    left: 10,

    color: "rgba(0,0,0,1)",
    width: "100%",
    height: "50%",
  },
  price: {
    position: "relative",
    top: 0,
    left: 40,
    fontSize: 15,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",

    color: "rgba(0,0,0,1)",
    width: "100%",
    height: "50%",
  },
  Group546: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 173,
    none: "0px",
    width: 372,
    height: 228,
  },
  Txt718: {
    fontSize: 20,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 105,
    height: 32,
    marginBottom: 3,
  },
  //   containerdes: {
  //     position: "absolute",
  //     left: 10,
  //     top: 430,
  //     height: "30%",
  //     width: "100%",
  //   },
  Group631: {
    position: "absolute",
    top: 296,
    left: 327,
    paddingTop: 7,
    paddingBottom: 26.37,
    paddingLeft: 5,
    paddingRight: 4,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tchxcl2433j-63%3A37?alt=media&token=7acf04f2-6eb4-4746-9a33-1567be34a299) */
    width: 21,
    height: 33.37,
  },
  Line7: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 11.53,
    height: 1.5,
  },

  Group68: {
    position: "absolute",
    top: 381,
    left: 286,
    paddingTop: 5,
    paddingBottom: 4.66,
    paddingLeft: 23,
    paddingRight: 21,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 85,
    height: 39.66,
  },
  Txt728: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 37,
    height: 26,
  },

  Group435: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 381,
    none: "0px",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight: 28,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 40,
  },
  Vector: {
    width: 13,
    height: 20.37,
    marginRight: 11,
  },
  Txt2510: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 38,
    height: 26,
  },

  Group6311: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: "20%",
    none: "0px",
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 10,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: "80%",
    height: "6%",
  },
  Group64: {
    width: 14,
    height: 15.01,
    marginRight: 10,
  },
  Txt560: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: "100%",
    height: 26,
  },

  Group018: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    none: "0px",
    width: 368,
    height: 864,
  },
  Group6312: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 29,
  },
  Frame: {
    width: 26,
    height: 19.3,
    marginRight: 19,
  },
  Txt342: {
    position: "absolute",
    top: 0,
    fontSize: 29,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    height: 37,
  },

  Rectangle41: {
    width: 368,
    height: 188.67,
    marginBottom: 554,
  },
  Group952: {
    display: "flex",
    flexDirection: "row",
  },
  Group634: {
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "rgba(217,217,217,0.3)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 174.37,
    height: 54.67,
  },

  Group641: {
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 174.37,
    height: 54.67,
  },

  Txt594: {
    position: "absolute",
    top: 120,
    left: 68,
    fontSize: 15,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 48,
    height: 25,
  },
  Txt215: {
    position: "absolute",
    bottom: 0,
    left: 10,
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 148,
    paddingRight: 146,
    marginBottom: 8,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: "100%",
    height: "30%",
    textAlign: "center",
  },
});
