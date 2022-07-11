import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Footer } from "./Footer";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, child, get } from "firebase/database";
export default function Profile({ route }) {
  const data = useSelector((state) => state.bookplace.value);
  const [userObject, setUserObject] = useState({});
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${route.params.userId}`)).then((snapshot) => {
      console.log(snapshot);
      const user = snapshot.val();
      setUserObject(user);
    });
  }, []);

  const navigation = useNavigation();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("out");
        navigation.navigate("Login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <View style={styles.Iphone13ProMax54}>
      {/* {console.log(userObject, "aeaeaeae")} */}
      <View style={styles.Group282}>
        {/* {console.log(route)} */}
        <ScrollView>
          <View style={styles.Group448}>
            <Text style={styles.Txt853}>{route.params.email}</Text>
            <View style={styles.Group698}>
              <View style={styles.Group588}>
                <Image
                  style={styles.Group122}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1364?alt=media&token=e1e4d44d-78ec-4618-bc52-3c3ee5e09ad2",
                  }}
                />
                <Text style={styles.Txt4910}>Profile</Text>
                {/* <View style={styles.Group96}></View> */}
              </View>
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate("EditProfile", {
                //     fullName: userObject.fullName,
                //   })
                // }
                style={styles.Group136}
              >
                <Image
                  style={styles.Group123}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1416?alt=media&token=a4369998-ab75-4140-8e87-ff79809c09a6",
                  }}
                />
                <Text style={styles.Txt1078}>Edit Profile</Text>
              </TouchableOpacity>
              <View style={styles.Group134}>
                <Image
                  style={styles.Group125}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1418?alt=media&token=a2c9e15d-e2b8-4843-928c-cc2ccf600d0c",
                  }}
                />
                <Text style={styles.Txt1078}>Payment</Text>
              </View>
              <View style={styles.Group136}>
                <Image
                  style={styles.Group124}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1417?alt=media&token=ac403737-f228-4438-90a6-eefd33fe6480",
                  }}
                />
                <Text style={styles.Txt1078}>Notification</Text>
              </View>
              <View style={styles.Group136}>
                <Image
                  style={styles.Group126}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1425?alt=media&token=ecf6364c-755b-494e-b697-769a71e972ac",
                  }}
                />
                <Text style={styles.Txt1078}>Security</Text>
              </View>
              <View style={styles.Group136}>
                <View style={styles.Group127}>
                  <Text style={styles.Txt5810}>!</Text>
                </View>
                <Text style={styles.Txt1078}>Help</Text>
              </View>
              <View style={styles.Group134}>
                <Image
                  style={styles.Group128}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1439?alt=media&token=d98288a5-3336-4f54-8da4-600a44b58092",
                  }}
                />
                <Text style={styles.Txt1078}>Dark Theme</Text>
              </View>
              <TouchableOpacity onPress={logOut} style={styles.Group646}>
                <Image
                  style={styles.Group129}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1444?alt=media&token=41f93cc0-823b-4217-ac90-6756526109f5",
                  }}
                />
                <Text style={styles.Txt631}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Group192}>
              <View style={styles.Group558}>
                <Image
                  style={styles.Frame}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1345?alt=media&token=4c8785e2-8fce-4a61-9d67-898d7510e420",
                  }}
                />
              </View>
              <View style={styles.Group5588}>
                <Image
                  style={styles.Frame12}
                  source={{
                    uri: "https://cdn5.vectorstock.com/i/thumb-large/54/69/male-user-icon-vector-8865469.jpg",
                  }}
                />
              </View>
            </View>
            {/* <Text style={styles.Txt458}>{userObject.fullName}</Text> */}

            <BouncyCheckbox
              style={styles.Vector5}
              fillColor="rgba(16, 181, 241, 0.8)"
            />
          </View>
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax54: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
  },
  Txt853: {
    position: "absolute",
    top: "35%",
    left: 80,
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 197,
    height: 21,
    // justifyContent:"center",
    // alignItems:"center"
  },
  Vector: {
    position: "absolute",
    top: "68.79%",
    bottom: "29.05%",
    left: "79.44%",
    right: "11.21%",
    width: 40,
    height: 20,
  },
  Group: {
    position: "absolute",
    top: 639,
    left: 362,
    width: 16.47,
    height: 16.82,
  },
  Group282: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "6%",
    none: "0px",
    width: "100%",
    height: "88%",
    // backgroundColor: "blue",
    // bottom:"12%"
  },
  Group448: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group698: {
    display: "flex",
    flexDirection: "column",
  },
  Group588: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 281,
  },
  Group122: {
    width: 25,
    height: 25,
    marginRight: 18,
  },
  Txt4910: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    marginRight: 9,
  },
  Group96: {
    paddingTop: 8.5,
    paddingBottom: 8.5,
    paddingLeft: 4.5,
    paddingRight: 4.5,
    borderRadius: 12,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 24,
    height: 24,
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 10.29,
    height: 2.06,
  },
  Ellipse22: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.06,
    height: 2.06,
    borderRadius: 1,
    marginRight: 6,
  },
  Ellipse24: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.06,
    height: 2.06,
    borderRadius: 1,
  },

  Group136: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 22,
  },
  Group123: {
    width: 18,
    height: 21.6,
    marginRight: 26,
  },
  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group134: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  Group125: {
    width: 20,
    height: 14.55,
    marginRight: 25,
  },
  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group136: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 22,
  },
  Group124: {
    width: 20,
    height: 22.22,
    marginRight: 25,
  },
  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group136: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 22,
  },
  Group126: {
    width: 18,
    height: 22.5,
    marginRight: 26,
  },
  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group136: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 22,
  },
  Group127: {
    paddingTop: 0.5,
    paddingBottom: 0,
    paddingLeft: 6.5,
    paddingRight: 5.5,
    marginRight: 24,
    borderRadius: 7,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: "rgba(161,161,161,1)",
    width: 22,
    height: 22,
  },
  Txt5810: {
    fontSize: 11,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 5,
    height: 18,
  },

  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group134: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  Group128: {
    width: 22,
    height: 16,
    marginRight: 23,
  },
  Txt1078: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },

  Group646: {
    display: "flex",
    flexDirection: "row",
  },
  Group129: {
    width: 18,
    height: 18,
    marginRight: 26,
  },
  Txt631: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(222,24,0,1)",
  },

  Group192: {
    position: "relative",
    // paddingTop: 96,
    // paddingBottom: 9,
    // paddingLeft: 104,
    paddingRight: 1,
    marginBottom: 9,
    borderRadius: 66,
    // backgroundColor: "green",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1343?alt=media&token=838df25a-5889-41f4-863e-6b709316ef57) */
    width: 132,
    height: 132,
    bottom: "65%",
  },
  Group558: {
    paddingTop: 5,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: "rgba(16, 181, 241, 0.8)",
    width: 25,
    height: 25,
  },
  Group5588: {
    paddingTop: 5,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: "rgba(16, 181, 241, 0.8))",
    width: "100%",
    height: "100%",
    // top:"10%",
    bottom: "19%",
    borderRadius: 66,
  },
  Frame: {
    width: 12,
    height: 12,
  },
  Frame12: {
    width: "100%",
    height: "100%",
    borderRadius: 66,
  },

  Txt458: {
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    // marginBottom: 529,
    bottom: "65%",
  },
  Group262: {
    backgroundColor: "rgba(16, 181, 241, 0.8)",
    width: 428,
    height: 90,
  },
  Vector1: {
    width: 22.9,
    height: 27,
  },
  Vector2: {
    width: 25,
    height: 27,
  },
  Group698: {
    display: "flex",
    flexDirection: "column",
  },
  Group1057: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group181: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 79,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvd78bogyl-79%3A1372?alt=media&token=5023017d-7de8-4f6e-960b-7a92e496c240) */
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

  Group115: {
    width: 14.73,
    height: 14.55,
  },

  Group646: {
    display: "flex",
    flexDirection: "row",
  },
  Txt277: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt343: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 62,
  },
  Txt731: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 64,
  },
  Txt806: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
  },

  Ellipse50: {
    backgroundColor: "rgba(188,0,99,1)",
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  Vector49: {
    width: 22.5,
    height: 11.5,
  },
  Vector50: {
    width: 19,
    height: 1.55,
  },

  Vector5: {
    position: "absolute",
    top: "69.57%",
    bottom: "28%",
    left: "79.44%",
    right: "10.51%",
    width: 43,
    height: 23,
  },
  Vector6: {
    position: "absolute",
    top: "69.9%",
    bottom: "29.29%",
    left: "80.37%",
    right: "15.78%",
    width: 16.47,
    height: 16.82,
  },
});
