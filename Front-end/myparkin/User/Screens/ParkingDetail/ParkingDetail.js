import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import { ParkingNameAndAdress } from "../../redux/Features/BookPlace";
import { auth } from "../../../firebase.config";

import { getDatabase, ref, child, get } from "firebase/database";

import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";


export default function ParkingDetail({ route, navigation }) {
  const [parkingName, setParkingName] = useState(route.params.parkingname);
  const [adress, setadress] = useState(route.params.adress);
  const [Price, setPrice] = useState(route.params.price);
  const [uid, setuid] = useState(auth.currentUser.uid);

  const [image, setImage] = useState(route.params.parkingImage);

  const [userObj, setUserObject] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      console.log(snapshot);
      const user = snapshot.val();
      setUserObject(user);
    });
  }, []);

  let updateStateAndNavigate = () => {
    dispatch(
      ParkingNameAndAdress({
        User_fullName: userObj.fullName,
        User_id: uid,
        ParkiCoins: 3000,
        CarType: "",
        ParkingName: parkingName,
        Adress: adress,
        Price: Price,
        ParkingSpot: "",
        Date: "",
        Duration: "",
        status: "Ongoing",
        image: image,

        arrivalTime: 0,
        exitTime: 0,
      })
    );
    navigation.navigate("SelectVec");
  };

  return (
    <View style={styles.container}>

      {console.log(route.params)}

      <View style={styles.innercontainer}>
        <View style={styles.Frame218}>
        <TouchableRipple onPress={() => {navigation.goBack()}}>
          <Lottie
            source={require("../assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableRipple>
        <Text style={styles.Txt3107}>Parking Detail</Text>
      </View>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{
              uri: route.params.parkingImage,
            }}
          />
        </View>
        <View style={styles.details}>
          <Image style={styles.adress} source={require('../images/contacts.png')}  />
          <Text style={styles.Txt1064}>{route.params.adress}</Text>
          <Image style={styles.phone} source={require('../images/tel.png')} />
          <Text style={styles.Txt999}> +216 {route.params.number}</Text>
          <Text style={styles.textmoney}> {route.params.price} Dt/hour</Text>
          <Image style={styles.money} source={require('../images/billets.png')} />
          <Image style={styles.distance} source={require('../images/hover-car.png')} />
          <Text style={styles.distance1}>{route.params.distance / 1000} Km away from you </Text>
        </View>
      </View>
      <View style={styles.btncontainter}>
        <TouchableRipple style={styles.Frame178} onPress={() => {updateStateAndNavigate()}}>
        <Text style={styles.Txt191}>Book Now</Text>
        </TouchableRipple>
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
    backgroundColor: "#F5FCFF",
    marginTop:'-4%'
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top: "-5%",
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
  btncontainter: {
    bottom: 10,
    height: "20%",
    width: "60%",
    left:'20%',
    top:'6.5%'
  },
  distance: {
    bottom: 50,
    left: 10,
    width: "10%",
    height: "15%",
    left:'-2%',
    top:'-40%'
 
  },

  adress: {
    width:'10%',
    height:'15%',
    left: '-3%',
    top: '-9%',
  },
  phone: {
    width:'10%',
    height:'15%',
    top:'-1%',
    left:'-2%'
  },
  textmoney: {
    position: "relative",
    bottom: 30,
    left: '20%',
    top:'-40%',
    fontWeight:'500'

  },
  details: {
    position: "relative",
    top: "48%",
    height: "40%",
    width: "100%",
  },
  distance1: {
    position: "absolute",
    bottom: 20,
    left: '20%',
    fontWeight:'500',
    fontSize: 15,
    top:'64%'

  },
  imagecontainer: {
    position: "absolute",
    top: 60,
    width: "100%",
    height: "30%",
    aspectRatio: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    top:'7%'
  },
  innercontainer: {
    width: "90%",
    height: "90%",
    // backgroundColor: "grey",
    left: 20,
    top:'10%'
  },
  Txt1064: {
    position: "absolute",
    top: '-6%',
    left: '20%',
    fontSize: 15,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    width: "80%",
    height: "40%",
  },
  Txt999: {
    position: "relative",
    top: '-14%',
    left: '20%',
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: "100%",
    height: "50%",
  },
  money: {
    bottom: 20,
    left: 10,
    width: "10%",
    height: "15%",
    left:'-2%',
    top:'-50%'
  },
  price: {
    position: "relative",
    top: 0,
    left: 40,
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: "100%",
    height: "50%",
  },
  Frame178: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: -100,
    paddingRight: 100,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    top:'-2%',
  },
  Txt191: {
    fontSize: 16,
    width:'100%',
    fontWeight: "700",
    color: "white",
    left:'380%'
  },
});
