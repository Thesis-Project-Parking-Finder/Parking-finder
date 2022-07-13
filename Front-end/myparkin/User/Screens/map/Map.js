import * as React from "react";
import MapView from "react-native-maps";
import { Marker, Callout, Circle } from "react-native-maps";
import { getDistance, getPreciseDistance } from "geolib";
import Carousel from "react-native-snap-carousel";
import MyCarousel from "./parkingDetailOnPress";
import { createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Animated,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Footer } from "../Footer";

import { useState, useEffect } from "react";
import MarkersInformation from "./MarkersInformation";
import * as Location from "expo-location";
import { TouchableRipple } from "react-native-paper";

function Map({ navigation }) {
  let mapRef = createRef();

  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(null);
  const [distance, setdistance] = useState(0);
  const [nearestOne, setnearestOne] = useState(null);
  const [parkingname, setparkingname] = useState("");
  const [parkingImage, setparkingImage] = useState("");
  const [price, setprice] = useState("");
  const [adress, setadress] = useState("");
  const [number, setnumber] = useState("");
  const [oneparking, setoneParking] = useState([]);
  const [showParking, setshowParking] = useState(false);
  const [showSlider, setshowSlider] = useState(true);
  const [showButtons, setshowButtons] = useState(true);
  const [mapHieght, setmapHeight] = useState("50%");

  const { width, height } = Dimensions.get("window");

  const onCarouselIetmChange = (index, coords) => {
    let location = coords[index];
    mapRef.animateToRegion({
      latitude: location.coordinate.latitude,
      longitude: location.coordinate.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const ParkingToDisplay = (latitudee, longitudee) => {
    let oneParking = MarkersInformation.filter((parking) => {
      return parking.coordinate.latitude === latitudee;
    });

    setoneParking(oneParking);
    setparkingname(oneparking[0].parkingName);
    setprice(oneParking[0].price);
    setnumber(oneParking[0].number);
    setadress(oneparking[0].adress);
    setparkingImage(oneparking[0].image);
    let Distance = getDistance(
      { latitude: latitudee, longitude: longitudee },
      { latitude: latitude, longitude: longitude }
    );

    setdistance(Distance);
    setshowParking(true);
    setshowSlider(false);
  };

  let cancel = () => {
    setshowParking(false);
    setshowSlider(true);
  };
  let showSliderr = () => {
    setshowSlider(true);
    setmapHeight("50%");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      Location.getCurrentPositionAsync({}).then((location) => {
        setlatitude(location.coords.latitude);
        setlongitude(location.coords.longitude);
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => (mapRef = map)}
        style={{
          width: Dimensions.get("window").width,
          // height: Dimensions.get("window").height ,
          height: mapHieght,
        }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton={true}
      >
        <Marker
          title="test title"
          coordinate={{
            latitude: latitude || 58.80278,
            longitude: longitude || 10.17972,
          }}
          pinColor="blue"
        >
          <Callout>
            <Text>Your position</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: latitude || 58.80278,
            longitude: longitude || 10.17972,
          }}
          radius={1000}
          lineDashPattern={[1]}
        />
        {MarkersInformation.map((element, index) => {
          return (
            <Marker
              onPress={(marker) =>
                ParkingToDisplay(
                  marker.nativeEvent.coordinate.latitude,
                  marker.nativeEvent.coordinate.longitude
                )
              }
              key={index}
              pinColor="green"
              coordinate={{
                latitude: element.coordinate.latitude,
                longitude: element.coordinate.longitude,
              }}
            >
              <Callout>
                <Text>{element.adress}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      {showParking && (
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: parkingImage,
            }}
          ></Image>
          <Text style={styles.cardtitle}> {parkingname}</Text>
          <Text style={styles.cardDescription}>{adress}</Text>

          <View style={styles.btncontainter}>
          <TouchableRipple style={styles.button2} onPress={() => {
                cancel();
              }}>
            <Text
              style={styles.TxtB}>Cancel</Text>
            </TouchableRipple>
            <TouchableRipple style={styles.button} onPress={() =>
                navigation.navigate("ParkingDetail", {
                  parkingname: parkingname,
                  parkingImage: parkingImage,
                  price: price,
                  adress: adress,
                  number: number,
                  distance: distance,
                })
              }>
            <Text style={styles.TxtB}>Details</Text>
            </TouchableRipple>
          </View>
        </View>
      )}
      {showSlider && (
        <MyCarousel onCarouselIetmChange={onCarouselIetmChange}></MyCarousel>
      )}
      {/* <View style={styles.ShowMenu}>
        <Button title="show nearest parking " style={styles.btn}></Button>
        <Button
          title="show availible parkings"
          style={styles.btn}
          onPress={() => {
            showSliderr();
          }}
        ></Button>
      </View> */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    height: "100%",
  },
  btn: {
    width: "100%",
  },

  ShowMenu: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "blue",
    height: "5%",
    bottom: 50,
    width: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height ,
    height: "88%",
  },
  btncontainter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 5,
    width: "100%",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  Group1301: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "15%",
    // none: "0px",
    width: "90%",
    height: "16%",
    right: "4%",
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group18: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 77,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A914?alt=media&token=7b249d29-c6da-4d0f-a30d-3574b5e08b4f) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 10,
    height: 1,
  },

  Group1085: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    marginRight: 77,
    backgroundColor: "rgba(188,0,99,1)",
    width: 19,
    height: 24,
  },
  Group115: {
    width: 14.73,
    height: 14.55,
  },

  Vector1: {
    width: 25,
    height: 27,
  },

  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt747: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt413: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 62,
  },
  Txt994: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    marginRight: 64,
  },
  Txt1072: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
  },

  Vector2: {
    position: "absolute",
    top: "25.56%",
    bottom: "44.44%",
    left: "58.18%",
    right: "36.47%",
    width: 22.9,
    height: 27,
  },
  test: {
    flex: 1,
    backgroundColor: "black",
  },
  button: {
    // bottom: 0,
    // height: "20%",
    // borderRadius: 20,
    position: "absolute",
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    bottom: "0.2%",
    left: "60%",
  },

  TxtB:{
    color:'white',
    fontWeight:'700',
  },

  button2: {
    // bottom: 0,
    // height: "20%",
    // borderRadius: 20,
    position: "absolute",
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    bottom: "0.2%",
    left: "20%",
  },

  card: {
    position: "relative",
    // backgroundColor: "orange",
    elevation: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    left: -10,
    height: "37%",
    width: "100%",
    overflow: "hidden",
    backgroundColor:'#EDFAFA'
  },
  cardImage: {
    width: "100%",
    height: "60%",
    alignSelf: "center",
    resizeMode: "cover",
  },
  cardtitle: {
    margin:4,
    fontSize: 20,
    // marginTop: 5,
    fontWeight: "bold",
    color:'#0260D1'
  },
  Group41010: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "13%",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardDescription: {
    marginLeft:10,
    fontSize: 15,
    color: "#444",
  },
});
/**/

export default Map;
