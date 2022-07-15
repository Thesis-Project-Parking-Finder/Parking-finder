import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { Footer } from "./Footer";
import { auth } from "../../firebase.config";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { database, db } from "../../firebase.config";
import { child, push, ref } from "firebase/database";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function HistoryParking({ navigation }) {
  const [bookings, setBookings] = useState([]);
  const [FilterStatus, setFilterStatus] = useState("Ongoing");
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const bookings = [];
      querySnapshot.forEach((doc) => {
        // const {
        const {
          CarType,
          ParkingName,
          Adress,
          Floor,
          ParkingSpot,
          Date,
          Duration,
          User_id,
          image,
          status,
          arrivalTime,
          exitTime,
          spotId,
          collSpot,
        } = doc.data();
        bookings.push({
          id: doc.id,
          CarType,
          ParkingName,
          Adress,
          Floor,
          ParkingSpot,
          Date,
          Duration,
          User_id,
          image,
          status,
          arrivalTime,
          exitTime,
          spotId,
          collSpot,
        });
        setBookings(
          bookings.filter(
            (e) =>
              e.User_id === auth.currentUser.uid && e.status === FilterStatus
          )
        );
      });
    })();
  }, [FilterStatus]);
  return (
    <View style={styles.Iphone13ProMax49}>
      {console.log(auth.currentUser.emailVerified, "datadatadata")}

      <View style={styles.Group163}>
        <View style={styles.Group865}>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A924?alt=media&token=481678b1-9e11-4345-9aa8-02128fd80e32",
            }}
          />
          <Text style={styles.Txt537}>My Parking</Text>
          <Image
            style={styles.Group113}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A927?alt=media&token=a1af44a4-616f-4e53-bd84-5ba5e6d6c1e2",
            }}
          />
        </View>
        <View style={styles.Group043}>
          <View style={styles.Group718}>
            <Text
              onPress={() => setFilterStatus("Ongoing")}
              style={styles.Txt400}
            >
              Ongoing
            </Text>
          </View>
          <TouchableOpacity style={styles.Group4102}>
            <Text
              onPress={() => setFilterStatus("Completed")}
              style={styles.Txt879}
            >
              Completed
            </Text>
          </TouchableOpacity>
          <View style={styles.Group273}>
            <Text onPress={() => alert(hour + ":" + min)} style={styles.Txt400}>
              Canceled
            </Text>
          </View>
        </View>
        {bookings.map((e) => {
          return (
            <View style={styles.Group130}>
              {console.log(e, "eee")}
              <Text style={styles.Txt5109}>{e.ParkingName}</Text>
              <View style={styles.Group268}>
                <View style={styles.Group472}>
                  <Image
                    style={styles.Rectangle63}
                    source={{
                      uri: `${e.image}`,
                    }}
                  />
                  <View style={styles.Group222}>
                    <Text style={styles.Txt208}>{e.Adress}</Text>
                    <View style={styles.Group396}>
                      <View style={styles.Group0107}>
                        <View style={styles.Group116}>
                          <Text style={styles.Txt694}>{e.status}</Text>
                        </View>
                      </View>
                      <Text style={styles.Txt196}>/{e.Duration} hours</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Group230}>
                  <Text
                    onPress={() =>
                      navigation.navigate("ParkingTimer", { objBook: e })
                    }
                    style={styles.Txt857}
                  >
                    View Ticket
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A925?alt=media&token=d9904088-aa07-4ead-90f0-b629fc4bd982",
        }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax49: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 73,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  Group163: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "blue",
    height: "100%",
    width: "100%",
  },
  Group865: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  Vector: {
    width: 95,
    height: 25,
    marginRight: 22,
  },
  Txt537: {
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

  Group043: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
    width: "100%",
    backgroundColor: "#fff",
    left: 0,
  },
  Group718: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 22,
    paddingRight: 20,
    marginRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  // Txt400: {
  //   fontSize: 16,
  //   fontWeight: "600",
  //   color: "rgba(9, 66, 139, 1)",
  // },

  Group4102: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 12,
    marginRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
    // backgroundColor: "red",
  },
  Txt879: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
  },

  Group273: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt400: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
  },

  Group313: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: "97%",
    height: 210,
  },
  Txt180: {
    position: "absolute",
    top: 17,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 166,
    height: 29,
  },
  Group586: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 308,
    height: 188,
  },
  Group472: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 53,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt976: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group1075: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 2,
    paddingBottom: 3.67,
    paddingLeft: 6,
    paddingRight: 0,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(1,219,62,1)",
    width: 87,
    height: 28.67,
    // left:17
  },
  // Txt694: {
  //   fontSize: 14,
  //   fontWeight: "600",
  //   color: "rgba(9, 66, 139, 1)",
  //   width: 80,
  //   height: 19,
  // },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group230: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 98,
    paddingRight: 98,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 285,
    height: 37,
  },
  Txt857: {
    fontSize: 16,
    // fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group130: {
    position: "relative",
    marginBottom: 22,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: "97%",
    height: 210,
  },
  Txt5109: {
    position: "absolute",
    top: 20,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 156,
    height: 29,
  },
  Group268: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    top: 16,
    none: "0px",
    width: 308,
    height: 188,
  },
  Group472: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 53,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt208: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 11,
  },
  Group396: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  // Group116: {
  //   paddingTop: 2,
  //   paddingBottom: 3.67,
  //   paddingLeft: 6,
  //   paddingRight: 0,
  //   borderRadius: 8,
  //   borderWidth: 2,
  //   borderStyle: "solid",
  //   borderColor: "rgba(1,219,62,1)",
  //   width: 87,
  //   height: 28.67,
  // },
  // Txt694: {
  //   fontSize: 14,
  //   fontWeight: "600",
  //   color: "rgba(1,219,62,1)",
  //   width: 80,
  //   height: 19,
  // },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  // Group230: {
  //   paddingTop: 5,
  //   paddingBottom: 4,
  //   paddingLeft: 98,
  //   paddingRight: 98,
  //   borderRadius: 50,
  //   borderWidth: 2,
  //   borderStyle: "solid",
  //   borderColor: "rgba(188,0,99,1)",
  //   width: 285,
  //   height: 37,
  // },
  // Txt857: {
  //   fontSize: 16,
  //   fontWeight: "600",
  //   color: "rgba(188,0,99,1)",
  //   textAlign: "center",
  //   justifyContent: "center",
  // },

  Group126: {
    position: "relative",
    marginBottom: 21,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt295: {
    position: "absolute",
    top: 25,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 127,
    height: 29,
  },
  Group7410: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 307,
    height: 99,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt976: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group1075: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  // Group116: {
  //   paddingTop: 2,
  //   paddingBottom: 3.67,
  //   paddingLeft: 6,
  //   paddingRight: 0,
  //   borderRadius: 8,
  //   borderWidth: 2,
  //   borderStyle: "solid",
  //   borderColor: "rgba(1,219,62,1)",
  //   width: 87,
  //   height: 28.67,
  // },
  Txt694: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(1,219,62,1)",
    width: 80,
    height: 19,
  },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group: {
    position: "absolute",
    top: 81,
    left: 41,
    width: 13.59,
    height: 14.97,
  },
});
