import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";

import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";
export default function Iphone13ProMax16() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };

  const forgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: -5 }],
          transform: [{ translateY: -5 }],
        }}
      >
        <View style={styles.Iphone13ProMax16}>
          <Image
            style={styles.Undraw_forgot_password_re_hxwm1}
            source={require('./images/forget.png')}
          />
          <View style={styles.Group1086}>
            <View style={styles.Group116}>
              <View style={styles.Frame218}>
                <TouchableRipple onPress={() => navigation.navigate("Login")}>
                  <Lottie
                    source={require("./assets/arrow2.json")}
                    autoPlay
                    loop
                    style={styles.Frame}
                  />
                </TouchableRipple>
                <Text style={styles.Txt3107}>Forgot Password</Text>
              </View>
            </View>
            <Text style={styles.Txt758}>
              Please enter your e-mail we should use to reset your password
            </Text>
                <TouchableOpacity
                style={styles.Group160}
              >
                <TextInput
                  style={styles.Txt448}
                  placeholder="e-mail"
                  value={email}
                  onChangeText={handleEmail}
                />
              </TouchableOpacity>
            <TouchableOpacity
              onPress={forgotPassword}
              style={styles.Rectangle4}
            >
              <Text style={styles.Txt111}>Continue</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax16: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    borderRadius: 50,
    paddingTop: 55,
    paddingBottom: 100,
    paddingLeft: 29,
    paddingRight: 29,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 419,
    height: 900,
  },
  Undraw_forgot_password_re_hxwm1: {
    position: "absolute",
    top: "20%",
    left: 70,
    width: "70%",
    height: "30%",
  },
  Group1086: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 73,
    none: "0px",
    width: 373,
    height: 797,
  },
  Group116: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 315,
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    top: "-70%",
    right: "4%",
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
  Txt292: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 50,
    left: 40,
    color: "rgba(0,0,0,1)",
    width: 282,
  },
  Txt758: {
    fontSize: 16,
    top: 0,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    marginBottom: 27,
    top:'-6%'
  },
  Group662: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 23,
    paddingBottom: 22,
    paddingLeft: 19,
    paddingRight: 113,
    marginBottom: 37,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.2)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
  },
  Group884: {
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    marginRight: 21,
    borderRadius: 31,
    backgroundColor: "rgba(188,0,99,0.3)",
    width: 62,
    height: 62,
  },
  Vector: {
    width: 21.88,
    height: 21.88,
  },
  Group4: {
    position: "relative",
    width: 129,
    height: 45,
  },
  Txt242: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,0.5)",
    width: 62,
    height: 23,
  },
  Txt123: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 129,
    height: 23,
  },
  Group365: {
    position: "relative",
    marginBottom: 61,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.2)",
    width: 348,
    height: 111,
  },
  Group1050: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 14,
    none: "0px",
    width: 306,
    height: 84,
  },
  Email: {
    width: 84,
    height: 84,
    marginRight: 11,
    right:'14%'
  },
  Group5: {
    position: "relative",
    width: 150,
    height: 45,
  },
  Txt593: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,0.5)",
    width: 68,
    height: 23,
  },
  Txt418: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
    width: 211,
    height: 23,
  },
  Ellipse3: {
    position: "absolute",
    top: 25,
    left: 21,
    backgroundColor: "rgba(188,0,99,0.3)",
    // backgroundColor: "rgba(9, 66, 139, 1)",
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  Group904: {
    paddingTop: 10,
    paddingBottom: 14,
    paddingLeft: 130,
    paddingRight: 127,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: "90%",
    height: "7%",
    left: "7%",
    backgroundColor: "rgba(9, 66, 139, 1)",
  },
  Txt111: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  FrameLottie: {
    width: "20%",
    height: "20%",
    top: "15%",
    marginLeft: 0,
    Left: 0,
    right: 0,
  },
  Rectangle4: {
    position: "absolute",
    top: "79%",
    left: 41,
    backgroundColor: "rgba(9, 66, 139, 1)",

    width: "70%",
    height: 53,
    borderRadius: 50,
  },
  Rectangle5: {
    position: "absolute",
    top: "70%",
    left: 41,
    backgroundColor: "rgba(9, 66, 139, 1)",

    width: "85%",
    height: 53,
    borderRadius: 50,
  },
  Group160: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "rgba(71, 192, 192, 0.08)",
    marginLeft: "3%",

    marginBottom: 28,
    borderRadius: 15,
    width: "70%",
    height: "10%",
    top:'-5%',
    left:'4%'
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
});
