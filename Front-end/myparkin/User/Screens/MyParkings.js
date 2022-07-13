import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { Footer } from "./Footer";
export default function MyParkings() {
  return (
    <View style={styles.Iphone13ProMax48}>
      <View style={styles.Group969}>
        <View style={styles.Group675}>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skxo60rdnn-79%3A828?alt=media&token=f07eebd4-80d8-4f43-9251-3337bb44aa36",
            }}
          />
          <Text style={styles.Txt681}>My Parking</Text>
          <Image
            style={styles.Group113}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skxo60rdnn-79%3A855?alt=media&token=8d4277de-bb55-4883-843f-bb76c24d59ce",
            }}
          />
        </View>
        <View style={styles.Group999}>
          <View style={styles.Group5109}>
            <Text style={styles.Txt1077}>Ongoing</Text>
          </View>
          <View style={styles.Group349}>
            <Text style={styles.Txt1077}>Completed</Text>
          </View>
          <View style={styles.Group676}>
            <Text style={styles.Txt604}>Canceled</Text>
          </View>
        </View>

        <View style={styles.Group845}>
          <Text style={styles.Txt229}>Beach Furlong</Text>
          <View style={styles.Group259}>
            <Image
              style={styles.Rectangle63}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skxo60rdnn-79%3A871?alt=media&token=fd5a15ab-283f-4f72-b9c3-68d2e9860d4c",
              }}
            />
            <View style={styles.Group004}>
              <Text style={styles.Txt588}>8638 Waubesg Plaza</Text>
              <View style={styles.Group498}>
                <View style={styles.Group1077}>
                  <Text style={styles.Txt558}>/ 2 hours</Text>
                  <View style={styles.Group116}>
                    <Text style={styles.Txt044}>Canceled</Text>
                  </View>
                </View>
                <Text style={styles.Txt1029}>/ 2 hours</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer />
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skxo60rdnn-79%3A829?alt=media&token=e7cf5a37-7892-4287-8678-0d3a825ac613",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax48: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    // paddingTop: 73,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  Group969: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top:"10%"
  },
  Group675: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  Vector: {
    width: 25,
    height: 25,
    marginRight: 22,
  },
  Txt681: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 29,
    color: "rgba(0,0,0,1)",
    width: 282,
    marginRight: 6,
  },
  Group113: {
    width: 18,
    height: 18,
  },

  Group999: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
  },
  Group5109: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 22,
    paddingRight: 20,
    marginRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt1077: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
  },

  Group349: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 12,
    marginRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt1077: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
  },

  Group676: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 18,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt604: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  Group882: {
    position: "relative",
    marginBottom: 31,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt952: {
    position: "absolute",
    top: 17,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 166,
    height: 29,
  },
  Group990: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 306,
    height: 98,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group004: {
    display: "flex",
    flexDirection: "column",
  },
  Txt588: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group498: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group1077: {
    display: "flex",
    flexDirection: "row",
  },
  Txt558: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 3,
    paddingBottom: 2.67,
    paddingLeft: 10,
    paddingRight: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(223,50,29,1)",
    width: 86,
    height: 28.67,
  },
  Txt044: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(223,50,29,1)",
    width: 70,
    height: 19,
  },

  Txt1029: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group882: {
    position: "relative",
    marginBottom: 31,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt474: {
    position: "absolute",
    top: 21,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 156,
    height: 29,
  },
  Group990: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 306,
    height: 98,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group004: {
    display: "flex",
    flexDirection: "column",
  },
  Txt588: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group498: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group1077: {
    display: "flex",
    flexDirection: "row",
  },
  Txt558: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 3,
    paddingBottom: 2.67,
    paddingLeft: 10,
    paddingRight: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(223,50,29,1)",
    width: 86,
    height: 28.67,
  },
  Txt044: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(223,50,29,1)",
    width: 70,
    height: 19,
  },

  Txt1029: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group882: {
    position: "relative",
    marginBottom: 31,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt872: {
    position: "absolute",
    top: 25,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 127,
    height: 29,
  },
  Group3101: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 306,
    height: 99,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group004: {
    display: "flex",
    flexDirection: "column",
  },
  Txt588: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group498: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group1077: {
    display: "flex",
    flexDirection: "row",
  },
  Txt558: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 3,
    paddingBottom: 2.67,
    paddingLeft: 10,
    paddingRight: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(223,50,29,1)",
    width: 86,
    height: 28.67,
  },
  Txt044: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(223,50,29,1)",
    width: 70,
    height: 19,
  },

  Txt1029: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group845: {
    position: "relative",
    marginBottom: 18,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt229: {
    position: "absolute",
    top: 29,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 131,
    height: 29,
  },
  Group259: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 306,
    height: 103,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group004: {
    display: "flex",
    flexDirection: "column",
  },
  Txt588: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group498: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group1077: {
    display: "flex",
    flexDirection: "row",
  },
  Txt558: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 3,
    paddingBottom: 2.67,
    paddingLeft: 10,
    paddingRight: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(223,50,29,1)",
    width: 86,
    height: 28.67,
  },
  Txt044: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(223,50,29,1)",
    width: 70,
    height: 19,
  },

  Txt1029: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group274: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 90,
  },
  Group747: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 23,
    none: "0px",
    width: 321,
    height: 45,
  },
  Group758: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group18: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 77,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skxo60rdnn-79%3A794?alt=media&token=88aaed54-1855-4db5-b544-e2ba5daf8d95) */
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

  Group745: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    marginRight: 77,
    backgroundColor: "rgba(188,0,99,1)",
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

  Group1077: {
    display: "flex",
    flexDirection: "row",
  },
  Txt658: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt776: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 62,
  },
  Txt8102: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    marginRight: 64,
  },
  Txt623: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
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

  Group: {
    position: "absolute",
    top: 81,
    left: 41,
    width: 13.59,
    height: 14.97,
  },
});
