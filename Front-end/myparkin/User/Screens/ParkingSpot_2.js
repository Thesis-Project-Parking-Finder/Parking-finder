import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { secondFloor } from "./FloorSpot";
import { FlatGrid } from "react-native-super-grid";
import { TouchableRipple } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
export default function ParkingSpot_1() {
  const navigation = useNavigation();
  let dispatch = useDispatch();
  let data = useSelector((state) => state.bookplace.value);
  const [globalState, setglobalState] = useState(data);
  const [show, setShow] = useState(false);

  const [show_Hide, setShowHide] = useState(false);

  const [items, setItems] = React.useState(secondFloor);

  const boxColored = (e) => {
    items.map((element, i) => {
      if (element.name === e._dispatchInstances.memoizedProps.children) {
        setglobalState((prevstate) => ({
          ...prevstate,
          ParkingSpot: `2nd floor (${element.name})`,
        }));
        element.type = !element.type;
        setShow(element.type);
      } else {
        element.type = false;
      }

      return element;
    });
    setShowHide(!show_Hide);
  };

  return (
    <View style={styles.Frame236}>
      <View style={styles.Frame237}>
        <View style={styles.Frame235}>
          <View style={styles.Group236}>
            <View style={styles.Frame2372}>
              <View style={styles.Frame220}>
                <View style={styles.Frame218}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("ParkingDetails")}
                  >
                    <Lottie
                      source={require("./assets/arrow2.json")}
                      autoPlay
                      loop
                      style={styles.Frame}
                    />
                  </TouchableWithoutFeedback>
                  <Text style={styles.Txt3107}>Pick Parking Spot</Text>
                </View>
              </View>
              <View style={styles.Frame223}>
                <TouchableRipple
                  style={styles.Group221}
                  onPress={() => navigation.navigate("ParkingSpot_1")}
                >
                  <Text style={styles.Txt3710}>1st Floor</Text>
                </TouchableRipple>
                <TouchableRipple
                  style={styles.Group220}
                  onPress={() => navigation.navigate("ParkingSpot_2")}
                >
                  <Text style={styles.Txt122}>2nd Floor</Text>
                </TouchableRipple>
                <TouchableRipple
                  style={styles.Group222}
                  onPress={() => navigation.navigate("ParkingSpot_3")}
                >
                  <Text style={styles.Txt3710}>3rd Floor</Text>
                </TouchableRipple>
              </View>
              <View style={{ transform: [{ translateY: 25 }] }}>
                <FlatGrid
                  itemDimension={130}
                  data={items}
                  style={styles.gridView}
                  spacing={15}
                  renderItem={({ item, index }) => {
                    {
                      if (
                        (index % 2 === 1 && item.name === "B02") ||
                        item.name === "B04" ||
                        item.name === "B08" ||
                        item.name === "B12"
                      ) {
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
                      } else if (
                        (index % 2 === 0 && item.name === "B03") ||
                        item.name === "B09" ||
                        item.name === "B07"
                      ) {
                        return (
                          <View
                            style={[
                              item.type ? styles.Box1 : styles.itemContainer1,
                            ]}
                          >
                            <View style={styles.verticleLine}></View>
                            <TouchableOpacity>
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
                            {/* {show && index === box ? 
         
          <View>
            <Image source={{uri: item.image}} style={{width: '100%', height: '100%'}} />
          </View>
          
        :
        <View></View>  
      
      } */}

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
                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.Frame224}>
              <Text
                style={styles.Txt351}
                onPress={() => {
                  navigation.navigate("BookingReview");
                  dispatch(ParkingNameAndAdress(globalState));
                }}
              >
                Continue
              </Text>
            </View>
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
    // backgroundColor:'yellow'
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
    backgroundColor: "white",
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
    color: "rgba(0,0,0,1)",
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
  },
  Group220: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 21,
    marginRight: 19,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt122: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
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
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
  },

  Frame2371: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
    marginTop: "4%",
  },
  Frame237: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  Frame224: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 128,
    paddingRight: 128,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    top: "-40%",
  },
  Txt351: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
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
});
