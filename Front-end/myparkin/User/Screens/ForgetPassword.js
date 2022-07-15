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
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6tzzc03l69q-42%3A55?alt=media&token=1d8fa8d3-074e-4c3d-b247-c1947d9a73e9",
            }}
          />
          <View style={styles.Group1086}>
            <View style={styles.Group116}>
              <Text style={styles.Txt292}>Forgot Password</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Login")}
              >
                <Lottie
                  source={require("./assets/arrow2.json")}
                  autoPlay
                  loop
                  style={styles.FrameLottie}
                />
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.Txt758}>
              Please enter your e-mail we should use to reset your password
            </Text>

            <View style={styles.Group365}>
              <View style={styles.Group1050}>
                <Image
                  style={styles.Email}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6tzzc03l69q-44%3A10?alt=media&token=a0daac46-8fee-4d84-8f95-471371b5eea5",
                  }}
                />
                <View style={styles.Group5}>
                  <Text style={styles.Txt593}> Email</Text>
                  <TextInput
                    style={styles.Group5}
                    placeholder="e-mail"
                    value={email}
                    onChangeText={handleEmail}
                  />
                </View>
              </View>
            </View>

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
    top: 200,
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
  Frame: {
    width: 26,
    height: 18,
    marginRight: 19,
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
    top: "75%",
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
});
