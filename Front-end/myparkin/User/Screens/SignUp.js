import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import Lottie from "lottie-react-native";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const [obj, setObj] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  function register() {
    if (obj.password === obj.confirm) {
      createUserWithEmailAndPassword(
        auth,

        obj.email,
        obj.password
      )
        .then((userCredential) => {

          // Signed in
          alert("signUp ok");

          // userCredential.user.sendEmailVerification();

          // setIsSignedIn;
          // ...
        })
        .catch((error) => {
          // setDisplayName;
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          alert(error.message);
        });
    } else {
      alert("Incorrect match password");
    }
  }
  function handleChange(text, eventName) {
    setObj((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }
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
        <View style={styles.Iphone13ProMax59}>
          <View style={styles.Frame156}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Let_s_In")}
            >
              <Lottie
                source={require("./assets/arrow2.json")}
                autoPlay
                loop
                style={styles.FrameLottie}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.Txt687}>Create Your Account</Text>

            <View style={styles.Frame157}>
              <View style={styles.Group153}>
                <Image
                  style={styles.Frame2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mq4jswihp3-307%3A58?alt=media&token=4eaa14aa-a2e4-4123-9c03-2082a5542291",
                  }}
                />
                <TextInput
                  style={styles.Txt448}
                  placeholder="Email"
                  onChangeText={(text) => handleChange(text, "email")}
                />
              </View>
              <View style={styles.Group152}>
                <Image
                  style={styles.Frame3}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mq4jswihp3-307%3A60?alt=media&token=8a01e39e-840c-42f1-ad0e-adfa435c1a09",
                  }}
                />
                <TextInput
                  style={styles.Txt1077}
                  placeholder="Password"
                  onChangeText={(text) => handleChange(text, "password")}
                />
              </View>
              <View style={styles.Group152}>
                <Image
                  style={styles.Frame3}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mq4jswihp3-307%3A60?alt=media&token=8a01e39e-840c-42f1-ad0e-adfa435c1a09",
                  }}
                />
                <TextInput
                  onChangeText={(text) => handleChange(text, "confirm")}
                  style={styles.Txt1077}
                  placeholder="Confirm"
                />
              </View>
            </View>
            <View style={styles.Group155}>
              <View style={styles.Frame155}>
                <View style={styles.Group154}>
                  <View style={styles.Rectangle13} />
                  <Text style={styles.Txt744}>Remember me</Text>
                </View>
                <TouchableOpacity style={styles.Group151} onPress={register}>
                  <Text style={styles.Txt917}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Frame1587}>
                <View style={styles.Group150}>
                  <Text style={styles.Txt881}>or continue with</Text>
                </View>
                <Image
                  style={styles.Group148}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f120pi1r4t-324%3A287?alt=media&token=de1db7b7-0129-4d26-83bc-a150bb03687d",
                  }}
                />

                <TouchableOpacity style={styles.Group149} onPress={register}>
                  <Text style={styles.Txt697}>Already have an account?</Text>
                  <Text style={styles.Txt644}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax59: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 13,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  Frame156: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "0%",
    width: "100%",
  },
  FrameLottie: {
    width: "20%",
    height: "25%",
    marginTop: "48%",
    marginLeft: "-8%",
    transform: [{ translateX: -25 }],
  },
  Txt687: {
    fontSize: 48,
    //  fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 56,
    color: "rgba(3, 52, 83, 1)",
    width: 391,
    marginBottom: 36,
    paddingLeft: "20%",
    marginTop: "-9%",
    //  paddingTop:"10%"
  },

  Frame157: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
    marginTop: "-15%",
  },
  Group153: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
    //  paddingLeft: 26,
    //  paddingRight: 5,
    marginBottom: 28,
    borderRadius: 15,
    backgroundColor: "rgba(71, 192, 192, 0.08)",

    //  backgroundColor:'blue'
    width: "70%",
    height: "14%",
  },
  Frame2: {
    width: "5%",
    height: "58%",
    //  marginRight: 24,
    marginLeft: "10%",
    marginRight: "7%",
  },
  Txt448: {
    fontSize: 15,
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
    //  textAlign: "center",
    //  justifyContent: "center",
    width: "100%",
    height: "100%",
    //  backgroundColor:'yellow'
  },

  Group152: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
    //  paddingLeft: 26,
    //  paddingRight: 5,
    marginBottom: 28,
    borderRadius: 15,
    backgroundColor: "rgba(71, 192, 192, 0.08)",

    //  backgroundColor:'blue'
    width: "70%",
    height: "14%",
  },
  Frame3: {
    width: "5%",
    height: "60%",
    //  marginRight: 24,
    marginLeft: "10%",
    marginRight: "7%",
  },
  Txt1077: {
    fontSize: 15,
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
    //  textAlign: "center",
    //  justifyContent: "center",
    width: "100%",
    height: "100%",
    //  backgroundColor:'yellow'
  },
  Group1: {
    paddingTop: 2,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mq4jswihp3-307%3A79?alt=media&token=644682b9-50be-4a64-811e-142f3d8d79c5) */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(169,169,169,1)",
    width: 17,
    height: 14,
  },
  Frame4: {
    width: 17,
    height: 10,
  },

  Group155: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //  backgroundColor:'red',
    top: "-13%",
  },
  Frame155: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    //  backgroundColor:'yellow',
    top: "0%",
  },
  Group154: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  Rectangle13: {
    borderWidth: 3,
    borderStyle: "solid",
    backgroundColor: "rgba(217,217,217,0.5)",
    width: 18,
    height: 19,
    borderRadius: 6,
    marginRight: 19,
  },
  Txt744: {
    fontSize: 16,
    //  fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(3, 52, 83, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Frame1587: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "-10%",
    // backgroundColor:'yellow',
  },
  Group151: {
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 139,
    paddingRight: 137,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    width: 337,
    height: 53,
  },
  Txt917: {
    fontSize: 16,
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt744: {
    fontSize: 16,
    //  fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(3, 52, 83, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Group150: {
    marginBottom: 26,
    width: 117,
    height: 23,
  },
  Txt881: {
    fontSize: 16,
    //  fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(169,169,169,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group148: {
    marginBottom: 26,
    width: 117,
    height: 23,
  },
  Group149: {
    display: "flex",
    flexDirection: "row",
  },
  Txt697: {
    fontSize: 16,
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    color: "rgba(156,148,148,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 207,
    height: 25,
    marginRight: 4,
  },
  Txt644: {
    fontSize: 16,
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(5,97,174,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 65,
    height: 25,
  },
});
