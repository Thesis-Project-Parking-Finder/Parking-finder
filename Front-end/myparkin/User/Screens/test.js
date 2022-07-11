import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  Firestore,
  QuerySnapshot,
} from "firebase/firestore";
import { database, db } from "../../firebase.config";
import { child, push, ref } from "firebase/database";
import { firebase } from "../../firebase.config";
import { FlatList } from "react-native-gesture-handler";
const test = () => {
  const [bookings, setBookings] = useState([]);
  const obj = {
    CarType: "volw",
    ParkingName: "srarr",
    Adress: "aaa",
    Floor: "",
    ParkingSpot: "aa",
    Date: "12",
    Duration: "1",
  };
  // const bookingsRef = firebase.firestore().collection("bookings");
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    // bookingsRef.onSnapshot((querySnapshot) => {
    const bookings = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", typeof doc.data());
      // const {
      const {
        CarType,
        ParkingName,
        Adress,
        Floor,
        ParkingSpot,
        Date,
        Duration,
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
      });
      setBookings(bookings.filter((e) => e.ParkingName === "aziz"));
    });
    // });
    // const bookingsRef = firebase.
    // const docSnap = getDoc(bookingsRef);
  }, []);

  function postBookings() {
    const newKey = push(child(ref(database), "bookings")).key;
    setDoc(doc(db, "bookings", `${newKey}`), obj);
    // console.log(newKey);
  }
  return (
    <View style={styles.container}>
      {console.log("kkk", bookings[0], "jjjj")}
      <Button title="add" onPress={postBookings} />
      <FlatList
        data={bookings}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable>
            <View>
              <Text>{item.ParkingName}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default test;
const styles = StyleSheet.create({
  container: {
    top: 122,
  },
});
// const {
//   CarType,
//   ParkingName,
//   Adress,
//   Floor,
//   ParkingSpot,
//   Date,
//   Duration,
// } = doc.data();
// bookings.push({
//   CarType,
//   ParkingName,
//   Adress,
//   Floor,
//   ParkingSpot,
//   Date,
//   Duration,
// });
// setBookings(bookings);
