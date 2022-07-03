import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Lottie from "lottie-react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { TouchableRipple } from "react-native-paper";

export default function ProfileFill() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(text, reg.test(text));
  };
  const logOut = () => {
    signOut(auth)
      .then((res) => {
        // setIsSignedIn(false);
        alert("ok");
      })
      .catch((err) => {
        alert(err.message, "eee");
      });
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: -5 }],
          transform: [{ translateY: -5 }],
        }}
      >
        <View style={styles.Iphone13ProMax61}>
          <View style={styles.Frame217}>
            <View style={styles.Frame159}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("SignUp")}
              >
                <Lottie
                  source={require("./assets/arrow2.json")}
                  autoPlay
                  loop
                  style={styles.FrameLottie}
                />
              </TouchableWithoutFeedback>
              <Text onPress={logOut} style={styles.Txt269}>
                Your Profile
              </Text>
            </View>
            <Image
              style={styles.Group158}
              source={{
                uri: "https://img.icons8.com/cotton/452/user-male-circle.png",
              }}
            />
             <Image
                  style={styles.Frame14}
                  source={{
                    uri: "https://img.icons8.com/external-anggara-filled-outline-anggara-putra/452/external-edit-interface-anggara-filled-outline-anggara-putra.png",
                  }}
                />
            <SafeAreaView style={styles.Frame166}>
              <View style={styles.Group159} >
              <TextInput
                maxLength={10}
                style={styles.Txt448}
                placeholder='FullName'
              />
              </View>
              {/* <TextInput maxLength={10} style={styles.Txt856} placeholder="FullName"/> */}
              {/* </View> */}
              <View style={styles.Group159}>
              <TextInput
                maxLength={7}
                style={styles.Txt448}
                placeholder='Username'
              />
              </View>
              {/* <TextInput style={styles.Txt856} placeholder="Username"/> */}
              {/* </View> */}
              <TouchableOpacity style={styles.Group160} onPress={showDatepicker}>
                <Text style={styles.Txt448}>Birthdate: {String(date)}</Text>
                <Image
                  style={styles.Frame3}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hs7mujhdsdi-322%3A229?alt=media&token=b6cce5c3-d97e-4930-b501-8119c53dfd93",
                  }}
                />
                </TouchableOpacity>
                <View style={styles.Group159}>
              <TextInput style={styles.Txt448} placeholder='Email' onChangeText={validate} />
               
              </View>
              <View style={styles.Group159}>
              <TextInput keyboardType="numeric" style={styles.Txt448} placeholder='Phone Number'/>
                {/* <Image
                  style={styles.Frame5}
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png",
                  }}
                /> */}
                </View>
              <TouchableRipple style={styles.Frame165} onPress={() => navigation.navigate("SuccessfullyCreated")}>
              <Text style={styles.Txt211}>Continue</Text>
            </TouchableRipple>
            </SafeAreaView>
            
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax61: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5,
    // top: "0.25%",
    paddingBottom: 26,
    paddingLeft: 22,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  FrameLottie: {
    width: "25%",
    height: "25%",
    paddingTop: 40,
    // marginTop:"30%",
    // marginLeft:"-10%",
    // transform: [{ translateX: -25 }]
  },
  Frame217: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // width:'100%',
    // height:'100%'
  },
  Frame159: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginBottom: 17,
    top:'7%'
  },

  Txt269: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: "80%",
    top: 13,
    // backgroundColor: "blue",
  },

  Group158: {
    width: 132,
    height: 133,
    marginBottom: 17,
    marginTop:'10%'
  },
  Frame166: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 17,
    width: "100%",
    height: "50%",
    // top:'4%'
    marginLeft:'22%'
  },
  Group159: {
    display: "flex",
       flexDirection: "row",
       alignItems: "center",
       paddingTop: 17,
       paddingBottom: 17,
      //  paddingLeft: 26,
      //  paddingRight: 5,
      backgroundColor: "rgba(71, 192, 192, 0.08)",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "rgba(0,0,0,1)",
       marginBottom: 28,
       borderRadius: 15,
      //  backgroundColor: "rgba(71, 192, 192, 0.08)",
       
      //  backgroundColor:'blue',
      width:'70%',
      height:'17%'
  },
  Txt448: {
    fontSize: 15,
   //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
   //  textAlign: "center",
   //  justifyContent: "center",
    width: "100%",
    height: "100%",
    // backgroundColor:'yellow',
    marginLeft: "8%",
    marginRight: "7%",
  },

  Group160: {
    display: "flex",
       flexDirection: "row",
       alignItems: "center",
       paddingTop: 17,
       paddingBottom: 17,
      //  paddingLeft: 26,
      //  paddingRight: '%',
      backgroundColor: "rgba(71, 192, 192, 0.08)",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "rgba(0,0,0,1)",
        marginLeft: '3%',
        // paddingRight: '5%',

       marginBottom: 28,
       borderRadius: 15,
      //  backgroundColor: "rgba(71, 192, 192, 0.08)",
       
      //  backgroundColor:'blue',
      width:'60%',
      height:'15%'
  },

  Group161: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
   //  paddingLeft: 26,
   //  paddingRight: '%',
   backgroundColor: "rgba(71, 192, 192, 0.08)",
 // borderWidth: 1,
 // borderStyle: "solid",
 // borderColor: "rgba(0,0,0,1)",
     marginLeft: '3%',
     // paddingRight: '5%',

    marginBottom: 28,
    borderRadius: 15,
   //  backgroundColor: "rgba(71, 192, 192, 0.08)",
    
   //  backgroundColor:'blue',
   width:'60%',
   height:'15%',
   marginLeft:'8%'
  },
  Txt664: {
    fontSize: 10,
    fontWeight: "400",
    color: "rgba(183,176,176,1)",
    // marginRight: 213,
  },
  Frame3: {
    width: 16,
    height: 16.52,
    transform: [{ translateX: -10 }],
  },

  Group162: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 259,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "100%",
    height: "12%",
  },
  Frame4: {
    width: 16,
    height: 11.9,
    transform: [{ translateX: 290 }, { translateY: -55 }],
  },

  Group163: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 34,
    paddingRight: 160,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Frame5: {
    width: 27,
    height: 18,
    transform: [{ translateY: -2 }, { translateX: -9 }],
  },
  Frame6: {
    width: 6,
    height: 10.79,
    marginRight: 18,
  },
  Txt856: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
  },

  Group164: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 27,
    paddingRight: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Txt283: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
    marginRight: 248,
  },
  Frame7: {
    width: 10,
    height: 7.33,
  },

  Frame165: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 107,
    paddingRight: 107,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    marginRight:'18%'
  },
  Txt211: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Frame14:{
    width: 27,
    height: 18,
    transform: [{ translateY: -40 }, { translateX: 59 }],
  }
});
