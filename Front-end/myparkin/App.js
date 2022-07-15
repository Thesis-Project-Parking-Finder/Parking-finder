import ignoreWarnings from "./ignoreWarnings.js";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./User/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase.config";
import StackNav from "./User/StacKNav2";
import { Footer } from "./User/Screens/Footer";
import { Provider } from "react-redux";
import { store } from "./User/redux/store";
export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [check, setcheck] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      const uid = user.email;
      setIsLogedIn(true);
      setcheck(uid);
    }
  });
  return (
    <NavigationContainer>
      {console.log(check)}
      {isLogedIn ? (
        <>
          <StackNav />
          {/* <Footer /> */}
        </>
      ) : (
        <StackNavigation />
      )}

      <StatusBar style='dark' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
