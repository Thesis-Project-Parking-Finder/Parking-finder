import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import Lottie from "lottie-react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { firstFloor } from "./FloorSpot";
import { FlatGrid } from "react-native-super-grid";
import { TouchableRipple } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

export default function ParkingSpot_1() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.bookplace.value);
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [globalState, setglobalState] = useState(data);
  const [show_Hide, setShowHide] = useState(false);
  const [spot, setSpot] = useState([]);
  // useEffect(() => {
  // const docRef = doc(db, "spot", "NsUROkT7DgjHuoyX66r2");
  // const docSnap = getDoc(docRef);

  // console.log("Document data:", docSnap.data());
  // getDoc(doc(db, "spot", "NsUROkT7DgjHuoyX66r2")).then((docSnap) => {
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setspot(docSnap.data()["1st Floor"]);
  //   } else {
  //     console.log("No such document!");
  //   }
  // });
  // }, []);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "firstFloor"));
      const spot = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data(), "jdhdhdhdh");
        const { image, name, type } = doc.data();
        spot.push({
          spotId: doc.id,
          image,
          name,
          type,
        });
      });
      setSpot(spot);
    })();
  }, []);
  function updateType(p) {
    const docRef = doc(db, "firstFloor", p.spotId);
    updateDoc(docRef, { type: !p.type });
  }

  const boxColored = (e) => {
    spot.map((element, i) => {
      if (element.name === e._dispatchInstances.memoizedProps.children) {
        console.log(element.spotId, "element.spotId");
        setglobalState((prevstate) => ({
          ...prevstate,
          ParkingSpot: `1st floor (${element.name})`,
          spotId: element.spotId,
          collSpot: "firstFloor",
        }));
        element.type = !element.type;
        setShow(element.type);
        // const docRef = doc(db, "spot", "NsUROkT7DgjHuoyX66r2");
        // updateDoc(docRef[i], { type: !element.type });
      } else {
        element.type = false;
      }

      return element;
    });
    setShowHide(!show_Hide);
  };

  return (
    <View style={styles.Frame236}>
      {console.log(spot, "adadadad")}
      <View style={styles.Frame237}>
        <View style={styles.Frame235}>
          <View style={styles.Group236}>
            <View style={styles.Frame2372}>
              <View style={styles.Frame220}>
                <View style={styles.Frame218}>
                  <TouchableRipple
                    onPress={() => navigation.navigate("FillCarInformation")}
                  >
                    <Lottie
                      source={require("./assets/arrow2.json")}
                      autoPlay
                      loop
                      style={styles.Frame}
                    />
                  </TouchableRipple>
                  <Text style={styles.Txt3107}>Pick Parking Spot</Text>
                </View>
              </View>
              <View style={styles.Frame223}>
                <TouchableRipple
                  style={styles.Group220}
                  onPress={() => navigation.navigate("ParkingSpot_1")}
                >
                  <Text style={styles.Txt122}>1st Floor</Text>
                </TouchableRipple>
                <TouchableRipple
                  style={styles.Group221}
                  onPress={() => navigation.navigate("ParkingSpot_2")}
                >
                  <Text style={styles.Txt3710}>2nd Floor</Text>
                </TouchableRipple>
                <TouchableRipple
                  style={styles.Group222}
                  onPress={() => navigation.navigate("ParkingSpot_3")}
                >
                  <Text style={styles.Txt3710}>3rd Floor</Text>
                </TouchableRipple>
              </View>
              <View style={{ transform: [{ translateY: 50 }] }}>
                <FlatGrid
                  itemDimension={130}
                  data={spot}
                  style={styles.gridView}
                  spacing={15}
                  renderItem={({ item, index }) => {
                    if (index % 2 === 1) {
                      console.log(item.name);
                      return (
                        <View
                          style={[
                            item.type ? styles.Box : styles.itemContainer,
                          ]}
                        >
                          <TouchableOpacity>
                            {!item.type ? (
                              <Text
                                style={styles.itemName}
                                onPress={boxColored}
                              >{item.name}</Text>) : (
                              <Text style={styles.itemName}>{item.name}</Text>
                            )}
                          </TouchableOpacity>
                          <View style={styles.horizontalLine}></View>
                        </View>
                      );
                    } else if (index % 2 === 1) {
                      return (
                        <View style={styles.car}>
                          <View style={styles.verticleLine}></View>
                          <Image
                            source={{ uri: item.image }}
                            style={{ width: "100%", height: "100%" }}
                          />
                          <View style={styles.horizontalLine}></View>
                        </View>
                      );
                    } else if (index % 2 === 0) {
                      return (
                        <View
                          style={[
                            item.type ? styles.Box1 : styles.itemContainer1,
                          ]}
                        >
                          <View style={styles.verticleLine}></View>
                          <TouchableOpacity
                          // onPress={(item) => updateType(item)}
                          >
                            {!item.type ? (
                              <Text
                                style={styles.itemName}
                                onPress={boxColored}
                              >
                                {item.name}
                              </Text>
                            ) : (
                              <Text style={styles.itemName}>{item.name}</Text>
                            )}
                          </TouchableOpacity>
                          <View style={styles.horizontalLine}></View>
                        </View>
                      );
                    } else if (index % 2 === 0) {
                      return (
                        <View
                          style={
                            styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21
                          }
                        >
                          <View style={styles.verticleLine}></View>
                          <Image
                            source={{ uri: item.image }}
                            style={{ width: "100%", height: "100%" }}
                          />
                          <View style={styles.horizontalLine}></View>
                        </View>
                      );
                    }
                  }}
                />
              </View>
            </View>
            <TouchableRipple style={styles.Frame224} onPress={() => {
                  navigation.navigate("BookingReview");
                  dispatch(ParkingNameAndAdress(globalState));
                }}>
        <Text
          style={styles.Txt351}>
          Continue
        </Text>
      </TouchableRipple>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    alignSelf: "center",
    // transform: [ {translateY:-110}]
    top: 23,
  },
  verticleLine: {
    position: "absolute",
    left: "-10%",
    top: "30%",
    height: "164%",
    width: "5%",
    backgroundColor: "#909090",
    transform: [{ translateX: -62 }],
  },
  gridView: {
    // marginTop: 10,
    flex: 1,
  },
  gridView1: {
    // marginTop: 10,
    flex: 1,
  },
  car: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    // paddingTop:60
    transform: [{ translateX: -140 }, { translateY: 6 }],
    // backgroundColor: "rgba(4,134,135,0.08)",
    // borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    // zIndex: -15,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    // paddingTop:60
    transform: [{ translateX: -140 }, { translateY: 10 }],
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
  itemContainer1: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    transform: [{ translateX: 250 }, { translateY: 10 }],
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  Frame236: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#F5FCFF",
  },

  Frame235: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Group236: {
    paddingTop: 0,
    paddingBottom: 31,
    paddingLeft: 0,
    paddingRight: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F5FCFF",
  },
  Frame2372: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor:'red',
    transform: [{ translateY: 40 }],
  },
  Frame220: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    // backgroundColor:'green',
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top:'4%'
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

  Frame223: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    // backgroundColor:'orange',
    marginTop: "4%",
    top:'7%'
  },
  Group220: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 21,
    marginRight: 19,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt122: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  Group221: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 17,
    marginRight: 19,
    borderRadius: 50,
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },

  Group222: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 18,
    borderRadius: 50,
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt3710: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
  },

  Frame237: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  Frame224: {
    position: "absolute",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 128,
    paddingRight: 128,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    bottom: "0.2%",
    left: "9%",
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    transform: [{ translateX: 250 }, { translateY: 6 }],
    // backgroundColor: "rgba(4,134,135,0.08)",
    // borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },

  Box: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    // paddingTop:60
    transform: [{ translateX: -140 }, { translateY: 10 }],
    backgroundColor: "#7CF772",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },

  Box1: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    transform: [{ translateX: 250 }, { translateY: 10 }],
    backgroundColor: "#7CF772",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
  Txt122: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
});
