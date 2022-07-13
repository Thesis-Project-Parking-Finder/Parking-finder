import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Lottie from "lottie-react-native";
import { child, ref, set } from "firebase/database";
import { database } from "../../firebase.config";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  TouchableRipple
} from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase.config";
import { updateProfile, updateEmail } from "firebase/auth";


export default function EditProfile({ route }) {
  const navigation = useNavigation();
  const [userId, setuserId] = useState(auth.currentUser.uid);
  const [userName, setUserName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);

  const handleFullName = (text) => {
    setUserName(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })

      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");

      });

    updateEmail(auth.currentUser, email)
      .then(() => {
        console.log("Updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
    set(ref(database, "users/" + userId), { fullNAme: userName });
  };
  // const edit = () => {
  //   if (obj.fullName === "") {
  //     Alert.alert("Must Fill All The Fields ");
  //   } else {
  //   }
  // };

  return (
    <KeyboardAvoidingView>
      {console.log(userId)}
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: -5 }],
          transform: [{ translateY: -5 }],
        }}
      >
        <View style={styles.Iphone13ProMax55}>
        <View style={styles.Frame218}>
        <TouchableRipple onPress={() => navigation.navigate("ParkingSpot_1")}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableRipple>
        <Text style={styles.Txt3107}>Edit Your Profile</Text>
      </View>
          <View style={styles.Frame166}>
          <View style={styles.Group159}>
          <Text style={styles.Txt439}>Your Name:</Text>
                <TextInput
                  style={styles.Txt448}
                  placeholder="FullName"
                  onChangeText={handleFullName}
                />
              </View>
              
              <View style={styles.Group159}>
              <Text style={styles.Txt439}>Your E-mail:</Text>
                <TextInput
                  style={styles.Txt448}
                  placeholder="E-mail"
                  onChangeText={handleEmail}
                />
              </View>
              </View>
              
        </View>
        <TouchableRipple style={styles.Frame224} onPress={handleUpdate}>
        <Text style={styles.Txt351}>Continue</Text>
      </TouchableRipple>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax55: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    paddingTop: 55,
    paddingBottom: 55,
    paddingLeft: 29,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: 904,
    width: 419,
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "1%",
    left:'-4%'
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
  Frame166: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 17,
    width: "100%",
    height: "50%",
    top:'-20%',
    marginLeft: "22%",
  },
  Group159: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "rgba(71, 192, 192, 0.08)",
    marginBottom: 54,
    borderRadius: 15,
    width: "70%",
    height: "17%",
  },
  Txt448: {
    fontSize: 15,
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
    width: "100%",
    height: "100%",
    marginLeft: "8%",
    marginRight: "7%",
  },
  Txt439: {
    position: "absolute",
    top: "-85%",
    left: 85,
    fontSize: 15,
    marginTop:'-4%',
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 217,
    height: 23,
  },
  Frame224: {
    position: "absolute",
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    bottom: "0.2%",
    left: "17%",
    top:'120%',
    width:'70%',
    height:'20%',
    marginTop:'-100%',
    // marginStart:'40%'
  },
  Txt351: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
});
