import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
  Platform,
} from "react-native";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { database, db } from "../../firebase.config";
import { child, push } from "firebase/database";
import { firebase } from "../../firebase.config";
import { FlatList } from "react-native-gesture-handler";
// import ImagePicker from "react-native-image-crop-picker";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
  let object = {
    image:
      "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5095?alt=media&token=00a522cf-4b56-4fdf-b7ff-2e3a393d1c59",
    name: "A03",
    type: false,
  };

  function postBookings() {
    const newKey = push(child(ref(database), "firstFloor")).key;
    setDoc(doc(db, "firstFloor", `${newKey}`), object);
    // console.log(newKey);
  }
  const [imageUrl, setImageUrl] = useState("");
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: "100%",
      height: "100%",
      cropping: true,
    }).then((image) => {
      const imageUrl = Platform.OS === "ios" ? image.sourceURL : image.path;
      setImageUrl(imageUrl);
    });
  };
  const upload = () => {
    const storage = getStorage();
    const storageRef = ref(storage, "some-child");

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <View style={styles.container}>
      {/* {console.log("kkk", imageUrl, "jjjj")} */}
      <Button title="add" onPress={upload} />
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
