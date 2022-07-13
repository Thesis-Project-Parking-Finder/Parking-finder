import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function AfterWelcomeScreen() {
  return (
    <View style={styles.GooglePixel}>
      <View style={styles.Android}>
        <View style={styles.Group135}>
          <View style={styles.imgcontainer}>
            <Image
              style={styles.Undraw_tourist_map_re_293e1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6oc3wz6ce42-296%3A506?alt=media&token=87103f1a-dace-4e41-bf7f-1568b7fa4c1c",
              }}
            />
          </View>

          {/* pargagraphe */}
          <View style={styles.Group134}>
            <View style={styles.Frame137}>
              <Text style={styles.Txt411}>
                Find Parking Places Around You Easily
              </Text>
            </View>
            <Text style={styles.Txt9109}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </Text>
          </View>
          {/* small rectangle */}

          {/* buttons container */}
          <View style={styles.Group131}>
            <View style={styles.Group295}>
              <Text style={styles.Txt1074}>Next</Text>
            </View>
            <View style={styles.Group532}>
              <Text style={styles.Txt3610}>Skip</Text>
            </View>
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
    // backgroundColor: "yellow",
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
    // backgroundColor: "blue",
  },
  Undraw_tourist_map_re_293e1: {
    top: 40,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    color: "rgba(0,0,0,1)",
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
    // backgroundColor: "black",
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
    backgroundColor: "rgba(188,0,99,1)",
    width: 337,
    height: "30%",
  },
  Txt1074: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
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
    backgroundColor: "rgba(217,217,217,1)",
    width: 337,
    height: "30%",
  },
  Txt3610: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 38,
    height: 17,
  },
});
