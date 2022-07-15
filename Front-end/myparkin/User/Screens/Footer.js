import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import HistoryParking from "./hirtoryParking";
import {Colors} from 'react-native-paper'
export const Footer = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      const uid = user.uid;
      setUserId(uid);
      setEmail(user.email);
    }
  });
  return (
    <View style={styles.Group41010}>
      <View style={styles.Group1301}>
        <View style={styles.Group851}>
          <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Image
              style={styles.Group99}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A921?alt=media&token=a1079220-cbc1-4e04-99be-256cbacf247d",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyBookMark")}
            style={styles.Group18}
          >
            <View style={styles.Line7} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HistoryParking")}
            style={styles.Group1085}
          >
            <Image
              style={styles.Group115}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A931?alt=media&token=bc514255-d9ce-4e88-b654-88f89ce80898",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", { userId: userId, email: email })
            }
          >
            <Image
              style={styles.Vector1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A912?alt=media&token=59b63bac-7858-411a-bf97-0136a86869a3",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Group0107}>
          <Text style={styles.Txt747}>Home</Text>
          <Text style={styles.Txt413}>Saved</Text>
          <Text style={styles.Txt994}>Booking</Text>
          <Text style={styles.Txt1072}>Profile</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Group41010: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "12%",
    bottom: 0,
    // margin:'-4%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    bottom: 4.2,
  },
  Group1301: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "30%",
    // none: "0px",
    width: "90%",
    height: "16%",
    right: "4%",
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
    right: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
    backgroundColor: Colors.grey300,
  },
  Group18: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 77,
    backgroundColor: Colors.grey400,
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A914?alt=media&token=7b249d29-c6da-4d0f-a30d-3574b5e08b4f) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    width: 10,
    height: 1,
  },

  Group1085: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    marginRight: 77,
    backgroundColor: Colors.grey400,
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
    color: Colors.blue600,
    marginRight: 67,
  },
  Txt413: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.blue600,
    marginRight: 62,
  },
  Txt994: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.blue600,
    marginRight: 64,
  },
  Txt1072: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.blue600,
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
});
