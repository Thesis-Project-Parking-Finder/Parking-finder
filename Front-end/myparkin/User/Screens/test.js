import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
const test = () => {
  const [obj, setObj] = useState({
    type: "track",
    carDetails: {
      brand: "volvo",
      model: "CX90",
      color: "black",
      carPlate: "123TU9087",
    },
    bookDetails: {
      date: "12/12/2022",
      start: "14:00",
      end: "15:00",
      price: "3",
      place: "A12",
    },
  });
  const [obj1, setobj1] = useState({});
  const docRef = doc(db, "bookin", "book");
  const docSnap = async () => {
    setobj1(await getDoc(docRef));
  };

  const booking = () => {
    setDoc(doc(db, "bookin", "book"), obj);
  };
  // function handleChange(text, eventName) {
  //   setObj((prev) => {
  //     return {
  //       ...prev,
  //       [eventName]: text,
  //     };
  //   });
  // }
  return (
    <View style={styles.container}>
      {console.log(obj1, "jjjj")}
      <Button title="add" onPress={docSnap} />
    </View>
  );
};

export default test;
const styles = StyleSheet.create({
  container: {
    top: 122,
  },
});
