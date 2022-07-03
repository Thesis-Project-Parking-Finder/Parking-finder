import React from "react";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Iphone13ProMax55() {
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
        <View style={styles.Iphone13ProMax55}>
          <TouchableOpacity style={styles.Rectangle4}>
            <Text style={styles.Txt276}>Update</Text>
          </TouchableOpacity>

          <TextInput style={styles.Rectangle7} placeholder="NumberPhone" />

          <Text style={styles.Txt915}>+92 324 4449931</Text>

          <Text style={styles.Txt439}>anabiajatoi448@gmail.com</Text>

          <TextInput style={styles.Rectangle9} placeholder="Email" />

          <TextInput style={styles.Rectangle6} placeholder="FullName" />

          <Text style={styles.Txt3410}>Anabia</Text>

          <Image
            style={styles.Frame6}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zqwihq6a3b-79%3A1457?alt=media&token=2f0a9469-bfef-47d6-b494-471f6cdb9df1",
            }}
          />
          <Text style={styles.Txt267}>Edit Profile</Text>
        </View>
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
  Txt276: {
    position: "absolute",
    top: "30%",
    left: 130,
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 62,
    height: 20,
  },
  Rectangle4: {
    position: "absolute",
    top: "72%",
    left: 41,
    backgroundColor: "rgba(188,0,99,1)",
    width: "85%",
    height: 53,
    borderRadius: 50,
  },
  Txt263: {
    position: "absolute",
    top: 755,
    left: 181,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 57,
    height: 23,
  },
  Rectangle11: {
    position: "absolute",
    top: 701,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
    height: 56,
    borderRadius: 15,
  },
  Frame: {
    position: "absolute",
    top: 695,
    left: 205,
    width: 10,
    height: 7.33,
  },
  Frame1: {
    position: "absolute",
    top: 678,
    left: 196,
    width: 27,
    height: 18,
  },
  Group322: {
    position: "absolute",
    top: 624,
    none: "0px",
    paddingTop: 1,
    paddingBottom: 42,
    paddingLeft: 177,
    paddingRight: 183,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
    height: 56,
  },
  Frame2: {
    width: 6,
    height: 10.79,
  },

  Txt915: {
    position: "absolute",
    top: "52%",
    left: 147,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 126,
    height: 23,
  },
  Frame3: {
    position: "absolute",
    top: 588,
    left: 202,
    width: 16,
    height: 11.9,
  },
  Txt439: {
    position: "absolute",
    top: "38%",
    left: 101,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 217,
    height: 23,
  },
  Rectangle9: {
    position: "absolute",
    top: "43%",
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "90%",
    height: 56,
    borderRadius: 15,
  },
  Frame4: {
    position: "absolute",
    top: 497,
    left: 202,
    width: 16,
    height: 16.52,
  },
  Rectangle8: {
    position: "absolute",
    top: 442,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
    height: 56,
    borderRadius: 15,
  },
  Txt449: {
    position: "absolute",
    top: 421,
    left: 170,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 80,
    height: 23,
  },
  Rectangle7: {
    position: "absolute",
    top: "57%",
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "90%",
    height: 56,
    borderRadius: 15,
  },
  Txt723: {
    position: "absolute",
    top: "28%",
    left: 193,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 34,
    height: 23,
  },
  Rectangle6: {
    position: "absolute",
    top: "29%",
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "90%",
    height: 56,
    borderRadius: 15,
    mixBlendMode: "normal",
  },
  Txt3410: {
    position: "absolute",
    top: "24%",
    left: 182,
    fontSize: 15,

    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: "20%",
    height: "15%",
  },
  Rectangle14: {
    position: "absolute",
    top: 246,
    left: 197,
    backgroundColor: "rgba(188,0,99,1)",
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  Frame5: {
    position: "absolute",
    top: 235,
    left: 204,
    width: 12,
    height: 12,
  },
  Ellipse1: {
    position: "absolute",
    top: 105,
    left: 144,
    width: 132,
    height: 132,
  },
  Frame6: {
    position: "absolute",
    top: "13%",
    left: "12%",
    width: 24,
    height: 18,
  },
  Txt267: {
    position: "absolute",
    top: "12%",
    left: 69,
    fontSize: 29,

    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    height: 34,
  },
});
