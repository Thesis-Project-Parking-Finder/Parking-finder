import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function ParkingDetail(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.Txt342}>Parking Details</Text>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{
              uri: props.route.params.parkingImage,
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.Txt1064}>Parking Lot of San Manolia</Text>
          <Text style={styles.Txt999}>
            {" "}
            <Text>
              {" "}
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </Text>
          </Text>
        </View>

        <View style={styles.Group887}>
          {/* <Text style={styles.Txt6106}>per hour</Text>
          <Text style={styles.Txt1077}>$2.02</Text> */}

          <View style={styles.Txt215}>
            <Text style={styles.Txt1074}>Book </Text>
          </View>
        </View>

        <View style={styles.Group6311}>
          <Image
            style={styles.Group64}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tchxcl2433j-63%3A52?alt=media&token=26cd5f60-77ba-4437-8f71-7b74b5573849",
            }}
          />
          <Text style={styles.Txt560}>8 AM - 10 PM $2.02 / hour</Text>
        </View>
        {/* 
        <View style={styles.containerdes}>
          <Text>
            {" "}
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    top: 30,

    width: "100%",
    height: "100%",
    // backgroundColor: "pink",
  },
  details: {
    position: "absolute",
    bottom: "20%",
    height: "30%",
    width: "100%",
    // backgroundColor: "orange",
  },
  imagecontainer: {
    position: "absolute",
    top: 60,
    width: "100%",
    height: "30%",

    aspectRatio: 1,
    // backgroundColor: "red",
  },
  image: {
    height: "100%",
    width: "100%",

    resizeMode: "cover",
  },
  innercontainer: {
    width: "90%",
    height: "90%",
    // backgroundColor: "grey",
    left: 20,
  },

  Group887: {
    position: "absolute",
    bottom: 10,
    none: "0px",
    paddingTop: 21,
    paddingBottom: 50,
    paddingLeft: 148,
    paddingRight: 147,
    borderRadius: 23,
    backgroundColor: "rgba(244,244,244,1)",
    width: "100%",
    height: "30%",
  },
  Txt1074: {
    position: "absolute",
    left: 120,
    fontSize: 16,
    top: "40%",

    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 41,
    height: 17,
  },

  Txt6106: {
    position: "absolute",
    fontSize: 14,
    bottom: 60,
    left: 120,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 120,
    height: 22,
  },
  Txt1077: {
    position: "absolute",
    bottom: 80,
    left: 140,
    fontSize: 24,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 200,
    height: 39,
  },

  Group63: {
    position: "absolute",
    top: 285,
    left: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  Txt1064: {
    position: "absolute",
    top: 0,
    left: 23,
    fontSize: 20,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: "80%",
    height: "40%",
  },
  Txt999: {
    position: "absolute",
    top: 30,
    left: 10,
    fontSize: 15,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: "100%",
    height: "50%",
  },
  Group546: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 173,
    none: "0px",
    width: 372,
    height: 228,
  },
  Txt718: {
    fontSize: 20,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 105,
    height: 32,
    marginBottom: 3,
  },
  //   containerdes: {
  //     position: "absolute",
  //     left: 10,
  //     top: 430,
  //     height: "30%",
  //     width: "100%",
  //   },
  Group631: {
    position: "absolute",
    top: 296,
    left: 327,
    paddingTop: 7,
    paddingBottom: 26.37,
    paddingLeft: 5,
    paddingRight: 4,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tchxcl2433j-63%3A37?alt=media&token=7acf04f2-6eb4-4746-9a33-1567be34a299) */
    width: 21,
    height: 33.37,
  },
  Line7: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 11.53,
    height: 1.5,
  },

  Group68: {
    position: "absolute",
    top: 381,
    left: 286,
    paddingTop: 5,
    paddingBottom: 4.66,
    paddingLeft: 23,
    paddingRight: 21,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 85,
    height: 39.66,
  },
  Txt728: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 37,
    height: 26,
  },

  Group435: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 381,
    none: "0px",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight: 28,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 40,
  },
  Vector: {
    width: 13,
    height: 20.37,
    marginRight: 11,
  },
  Txt2510: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 38,
    height: 26,
  },

  Group6311: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: "20%",
    none: "0px",
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 10,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: "80%",
    height: "6%",
  },
  Group64: {
    width: 14,
    height: 15.01,
    marginRight: 10,
  },
  Txt560: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: "100%",
    height: 26,
  },

  Group018: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    none: "0px",
    width: 368,
    height: 864,
  },
  Group6312: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 29,
  },
  Frame: {
    width: 26,
    height: 19.3,
    marginRight: 19,
  },
  Txt342: {
    position: "absolute",
    top: 0,
    fontSize: 29,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    height: 37,
  },

  Rectangle41: {
    width: 368,
    height: 188.67,
    marginBottom: 554,
  },
  Group952: {
    display: "flex",
    flexDirection: "row",
  },
  Group634: {
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "rgba(217,217,217,0.3)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 174.37,
    height: 54.67,
  },

  Group641: {
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 174.37,
    height: 54.67,
  },

  Txt594: {
    position: "absolute",
    top: 120,
    left: 68,
    fontSize: 15,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    width: 48,
    height: 25,
  },
  Txt215: {
    position: "absolute",
    bottom: 0,
    left: 10,
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 148,
    paddingRight: 146,
    marginBottom: 8,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: "100%",
    height: "30%",
    textAlign: "center",
  },
});
