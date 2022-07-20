
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { TouchableRipple, Colors, Checkbox } from "react-native-paper";

import Lottie from "lottie-react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { child, push, ref } from "firebase/database";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, database, db } from "../../firebase.config";

const BookingReview = ({ navigation }) => {
  let data = useSelector((state) => state.bookplace.value);
  const [globalState, setglobalState] = useState(data);
  let TotalPrice = globalState.Price * globalState.Duration;
  let totalcoins = globalState.Duration * 100;

  const [checkedCustom, setCheckedCustom] = React.useState(false);
  const [checkedCustom2, setCheckedCustom2] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [userObject, setUserObject] = useState({});
  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", `${auth.currentUser.uid}`);
      const docSnap = await getDoc(docRef);
      setUserObject(docSnap.data());
      // console.log("Document data:", docSnap.data());
    })();
  }, []);

  function postBookings() {
    if(userObject.currencyPoints>totalcoins){
      const newKey = push(child(ref(database), "bookings")).key;
      setDoc(doc(db, "bookings", `${newKey}`), globalState);
      navigation.navigate("ticket");
      const spotRef = doc(db, "users", `${auth.currentUser.uid}`);
      updateDoc(spotRef, {
        currencyPoints: userObject.currencyPoints - globalState.Duration * 100,
      });
    }else{ navigation.navigate('CantBookings')}
   
  }
  // function facture()
  var facture = userObject.currencyPoints - totalcoins;
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
                <Text style={styles.Txt829}>Parky Coin</Text>
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

      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Parky Coin:</Text>

            <Text style={styles.modalText2}>{userObject.currencyPoints}</Text>
            <Text style={styles.modalText1}>Parking Fee:</Text>
            <Text style={styles.modalText3}>{totalcoins}</Text>
            <Text style={styles.modalText3}>
              Total: {userObject.currencyPoints} - {totalcoins}
            </Text>
            <View style={styles.horizontalL}></View>
            <Text style={styles.modalText4}>= {facture}</Text>
            <TouchableRipple
              style={styles.button}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Image source={require("./images/X.png")} />
            </TouchableRipple>
            <TouchableRipple style={styles.button1} onPress={postBookings}>
              <Image
                style={styles.textStyle}
                source={require("./images/done.png")}
              />

            </TouchableRipple>
          </View>
        </View>
      </Modal>

      {/* <TouchableRipple style={styles.Frame224} onPress={() => {checkedCustom2 && setShow(!show)}}>
        <Text
          style={styles.Txt351}

          onPress={() => checkedCustom2 && setShow(!show)}

        >
          Continue
        </Text>
      </TouchableRipple> */}
      <TouchableRipple style={styles.Frame224} onPress={() => {
                  checkedCustom2 && setShow(!show)
                }}>
        <Text
          style={styles.Txt351}>
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
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 19,
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
    backgroundColor: "#F5FCFF",
  },
  Frame224: {
    position: "absolute",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    bottom: "0.2%",
    left: "14%",
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 300,
    alignSelf: "center",
    top: "70%",
  },
  horizontalL: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 100,
    alignSelf: "center",
    top: "0%",
  },
  Wrapper: {
    transform: [{ translateY: 160 }, { translateX: -10 }],
  },
  price: {
    fontSize: 15,
    left: "50%",
    width: 300,
    top: "70%",
    fontWeight: "500",
    color: "#104685",
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    width: 90,
  },

  enTnd: {
    fontSize: 15,
    left: "20%",
    width: 300,
    top: "60%",
    fontWeight: "500",
  },
  amountpp: {
    fontSize: 15,
    left: "60%",
    width: 300,
    top: "65%",
    fontWeight: "500",
    color: "#104685",
  },
  enpp: {
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
  Txt115: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 100,
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
  Txt688: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 54,
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
  Txt875: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginRight: 197,
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
    transform: [{ translateX: -30 }],
    top: "-5%",
  },
  imageM: {
    width: "40%",
    height: "120%",
    transform: [{ translateX: -30 }],
    top: "-5%",
  },
  imageP: {
    width: "10%",
    height: "10%",
    transform: [{ translateX: -30 }],
    top: "-5%",
  },
  Group73: {
    width: "100%",
    height: "100%",
  },
  Txt829: {
    // width: '100%',
    // height:'100%',
    fontSize: 20,
    // marginRight:-4,
    fontSize: 15,
    transform: [{ translateX: -18 }],
    fontWeight: "800",
    color: "rgba(53,53,53,1)",
  },
  Ellipse44: {
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
    marginLeft: "20%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {

    width: "5%",
    height: "5%",
    top: "20%",
    right: "34%",
    // left:'30'
  },
  button1: {
    left: "34%",
    width: "5%",
    height: "5%",
    top: "12%",

  },
  buttonClose: {
    backgroundColor: "#2196F3",
    margin: 4,
    transform: [{ translateX: -50 }, { translateY: 70 }],
  },
  buttonConfirm: {
    backgroundColor: Colors.green900,
    margin: 4,
    transform: [{ translateX: 50 }, { translateY: 23 }],
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",

    fontSize: 20,
    color: "#0260D1",
    fontWeight: "bold",

  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: "bold",
    color: Colors.blue900,

  },
  modalText3: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: "bold",

  },
  modalText4: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: "bold",
    color: Colors.red800,

  },
});
export default BookingReview;
