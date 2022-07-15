import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  
  return (
    <View>
      <ImageBackground
        source={require("./images/backgroundImage.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.Frame166}>
          <View style={styles.Frame216}>
            <View style={styles.Frame216}>
              <Image
                style={styles.Image5}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/j2q6gwoqwna-324%3A1063?alt=media&token=08984ad7-8aaa-47ea-8c72-bb7c394e9074",
                }}
              />
              <Text style={styles.Txt897}>Parky</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("FirstView")}>
              <Lottie
                source={require("./assets/start2.json")}
                autoPlay
                loop
                style={styles.Group12}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Frame166: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    height: "25%",
    top: "85%",
    paddingLeft: "30%",
    // backgroundColor:'red'
  },
  Frame216: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Frame216: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Image5: {
    width: 288,
    height: 101,
    
  },
  Txt897: {
    fontSize: 36,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: "30%",
    height: "30%",
  },
  Group12:{ 
  width: "100%", 
  height: "100%",
  left:'-2%',
  top:'-2%' 
}
});
