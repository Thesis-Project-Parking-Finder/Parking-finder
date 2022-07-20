import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, Text, View, ImageBackground, Button, TouchableOpacity } from "react-native";


export default function Slide_2() {
    const navigation = useNavigation();

  return (
    <View style={styles.GooglePixel}>
      <View style={styles.Android}>
        <View style={styles.Group135}>
          <View style={styles.imgcontainer}>
          <Image
          style={styles.Undraw_tourist_map_re_293e1}
          source={require("./images/phone.png")}
        />
          </View>
          {/* pargagraphe */}
          <View style={styles.Group137}>    
          <View style={styles.Group134}>
            <View style={styles.Frame137}>
              <Text style={styles.Txt411}>
              Book and Pay Parking Quickly & Safely
              </Text>
            </View>
            <Text style={styles.Txt9109}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </Text>
          </View>
          </View> 

          {/* small rectangle */}
          {/* <View style={styles.Frame138}>
            <View style={styles.Group138}>
              <View style={styles.Rectangle3} />
              <View style={styles.Rectangle1} />
              <View style={styles.Rectangle2} />
              </View>
            </View> */}
             
          {/* buttons container */}
          <View style={styles.Group131}>
            <TouchableOpacity style={styles.Group295} onPress={()=> navigation.navigate("ThirdView")}>
            <Text style={styles.Txt1074}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Group532} onPress={()=> navigation.navigate("Let_s_In")}>
            <Text style={styles.Txt3610} >Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GooglePixel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: "100%",
    // backgroundColor: "red",
  },
  imgcontainer: {
    width: "80%",
    height: "50%",
    flexDirection: "column",
    alignItems: "center",
    aspectRatio: 1,
  },
  Android: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 29,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
    height: "100%",
  },
  Group135: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: "100%",
    backgroundColor: "#fff",
  },
  Undraw_tourist_map_re_293e1: {
    top: 40,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Group137:{
    // backgroundColor:"blue",
    top:40,
    height:"35%",
    
  },

  Group134: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 17,
    height: "25%",
    // backgroundColor: "orange",
  },
  Frame137: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    // marginBottom: 17,
  },
  Txt411: {
    fontSize: 26,
    fontWeight: "600",
    color: "rgba(3, 52, 83, 1)",
    textAlign: "center",
    justifyContent: "center",
    right: 10,
    // height: "60%",
  },
  Txt9109: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    // height: "40%",
  },
  Frame138: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 48,
    height:"10%",
    // backgroundColor: "black",
  },
  Group138:{
    // backgroundColor:"blue",
    top:40,
    height:"35%",
    
  },
  Rectangle3: {
    backgroundColor: "rgba(188,0,99,1)",
    width: 20,
    height: 5,
    borderRadius: 4,
    marginRight: 3,
  },
  Rectangle1: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 20,
    height: 5,
    borderRadius: 4,
    marginRight: 3,
  },
  Rectangle2: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 20,
    height: 5,
    borderRadius: 4,
  },
  Group131: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0.36,
    paddingLeft: 0,
    paddingRight: 0,
    height: "25%",
  },
  Group295: {
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 148,
    paddingRight: 146,
    marginBottom: 8,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    width: 337,
    height: "30%",
  },
  Txt1074: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    width: 41,
    height: 17,
  },
  Group532: {
    paddingTop: 13,
    paddingBottom: 10,
    paddingLeft: 150,
    paddingRight: 147,
    borderRadius: 50,
    backgroundColor: "rgba(4,134,135,0.08)",
    width: 337,
    height: "30%",
  },
  Txt3610: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(5,97,174,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 38,
    height: 20,
  },
});







