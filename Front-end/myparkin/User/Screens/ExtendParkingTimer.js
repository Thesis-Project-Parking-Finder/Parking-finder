import React, { Component, useState } from "react";
import ReactNative, { TouchableOpacity } from "react-native";
import RNListSlider from "react-native-list-slider";
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  Colors,
  useTheme,
  TouchableRipple,
  Checkbox,
} from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const { View, Text, StyleSheet, Image } = ReactNative;

export default function ExtendParkingTimer() {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [checkedCustom, setCheckedCustom] = React.useState(false);
  const [checkedCustom2, setCheckedCustom2] = React.useState(false);

  const onValueChanged = (p) => {
    setValue(p);
  };

  const {
    colors: { background },
  } = useTheme();

  return (
    <SafeAreaView style={styles.Wrapper}>
      <View style={styles.Frame218}>
        <TouchableOpacity onPress={() => navigation.navigate("ParkingTimer")}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableOpacity>
        <Text style={styles.Txt3107}>Extend Parking Timer</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.Txt3108}>Add Duration:</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={styles.Paragraph}>{value}</Paragraph>
          </Card.Content>
        </Card>
        <RNListSlider
          value={value}
          onValueChange={onValueChanged}
          decimalPlaces={0}
          maximumValue={4}
          mainContainerStyle={{ backgroundColor: "#ECF3F6" }}
          scrollEnabled={true}
          tenthItemStyle={{ backgroundColor: "#E1F9F9" }}
        />
      </View>
      <View style={styles.Frame256}>
        <View style={styles.Txt1002}>
            <Text style={styles.Txt3109}>Choose Payment Methods:</Text>
        </View>
      
      <TouchableRipple style={[styles.Group252, Colors.green500]} onPress={() => {checkedCustom2 ? setCheckedCustom(false) : setCheckedCustom(!checkedCustom)}}>
        <View style={styles.Group251}>
          <View style={styles.Group249}>
            <Image source={{
                uri: "https://img.icons8.com/dusk/452/banknotes.png",
              }} style={styles.imageM}  />
            <View style={styles.Group73}>
              <Text style={styles.Txt829}>Cache Money</Text>
            </View>
          </View>
          {/* <View style={styles.Ellipse44} /> */}
          <TouchableRipple onPress={() => {checkedCustom2 ? setCheckedCustom(false) : setCheckedCustom(!checkedCustom)}}>
        <View style={styles.Ellipse44}>
          <View pointerEvents="none">
            <Checkbox
              color={Colors.green500}
              status={checkedCustom ? 'checked' : 'unchecked'}
            />
          </View>
        </View>
      </TouchableRipple>
        </View>
      </TouchableRipple>
  
    </View>
    <View style={styles.Frame255}>
      <TouchableRipple style={[styles.Group253, Colors.blue900]} onPress={() => {checkedCustom ? setCheckedCustom2(false) : setCheckedCustom2(!checkedCustom2)}}>
        <View style={styles.Group251}>
          <View style={styles.Group249}>
            <Image source={{
                uri: "https://img.icons8.com/cotton/344/ruble--v2.png",
              }} style={styles.image}  />
            <View style={styles.Group73}>
              <Text style={styles.Txt829}>Parking Coin</Text>
            </View>
          </View>
          {/* <View style={styles.Ellipse44} /> */}
          <TouchableRipple onPress={() => {checkedCustom ? setCheckedCustom2(false) : setCheckedCustom2(!checkedCustom2)}}>
        <View style={styles.Ellipse44}>
          <View pointerEvents="none">
            <Checkbox
              color={Colors.blue900}
              status={checkedCustom2 ? 'checked' : 'unchecked'}
            />
          </View>
        </View>
      </TouchableRipple>
        </View>
      </TouchableRipple>
  
    </View>
      <View style={styles.card1}>
        <Text style={styles.ParagraphR}>Total:</Text>
        {checkedCustom2 && !checkedCustom  ?
        <Image style={styles.imageL} source={{uri: 'https://img.icons8.com/cotton/344/ruble--v2.png'}} />
        : <Image style={styles.imageL} source={{uri: 'https://img.icons8.com/dusk/452/banknotes.png'}} />
        }
        <Text style={styles.Paragraph2}>30/  </Text>
        <Text style={styles.Paragraph1}> {value}hours</Text>
      </View>
    
      <TouchableOpacity
        style={styles.Frame178}
        onPress={() => navigation.navigate("ParkingTimer")}
      >
        <Text style={styles.Txt191}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5FCFF",
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    backgroundColor: "#F5FCFF",
    // top: "-100%",
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 19,
    // backgroundColor:'pink'
  },
  Txt3107: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "#104685",
    width: 282,
  },
  Txt3108: {
    fontSize: 20,
    top: "-5%",
    fontWeight: "600",
    lineHeight: 34,
    color: "#0272F6",
    width: 282,
    marginLeft:-40,
  },
  Txt1002:{
    width: '40%',
    height: 23,
    // zIndex:10,
  },
  Txt3109: {
    fontSize: 20,
    // top: "0%",
    fontWeight: "600",
    // lineHeight: 34,
    color: "#0272F6",
    width: '180%',
    height:'200%',
    top:'-580%',
    marginLeft:-60,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: "100%",
    // marginTop: "-60%",
    zIndex: -10,
    top:'-15%'
  },
  card: {
    margin: 4,
    width: "10%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    // top:-10,

    backgroundColor: "#ECF3F6",
    top: "-1%",
  },

  card1: {
    // margin: 4,
    width: "29%",
    height: "12%",
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius:20,
    // top:-10,

    // backgroundColor: "#ECF3F6",
    top: "-3%",
  },
  Paragraph: {
    fontSize: 14,
    width: "100%",
    height: "100%",
    fontWeight: "800",
    justifyContent: "center",
    alignSelf: "center",
    color: "rgba(0,0,0,1)",
    paddingRight: -7,
    // top: -10
  },
  Paragraph1: {
    fontSize: 20,
    width: "100%",
    height: "100%",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    // paddingRight: -7,
    marginLeft:'75%',

    top: '-141%'
  },
  Paragraph2: {
    fontSize: 20,
    width: "100%",
    height: "100%",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    // paddingRight: -7,
    marginLeft:'50%',

    top: '-41%'
  },
  imageL:{
    width: '30%',
    height:'35%',
    top:'-8%',
    marginLeft:'10%'
    // marginRight:25
  },
  ParagraphR: {
    fontSize: 30,
    width: "100%",
    height: "70%",
    fontWeight: "800",
    color: "#104685",
    // paddingRight: -7,
    // top: 10,
    marginLeft:'7%',
    top:'6%'
  },
 
  Frame255: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '80%',
    height: '0%',
    top:'-14%'
  },
  Frame256: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '80%',
    height: '0%',
    // margin:'0%',
    // paddingLeft:'0%',
    // marginRight:'10%',

    top:'-1%'
  },
  Group252: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingLeft: 34,
    // paddingRight: 32,
    marginBottom: 22,
    borderRadius: 23,
    paddingRight:'1%',
    backgroundColor: "#ECF3F6",
    width: '90%',
    height: 70,
    // top:'0%',
    marginLeft:'20%',
  },
  Group253: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingLeft: 34,
    paddingRight: '1%',
    marginBottom: 22,
    borderRadius: 23,
    backgroundColor: "#ECF3F6",
    width: '90%',
    height: 70,
    // top:'0%',
    marginLeft:'20%',
  },
  
  Group249: {
    display: "flex",
    flexDirection: "row",
    marginRight: 118,
    
  },
  image:{
    width: '60%',
    height:'150%',
    marginRight:58,
    top:'-12%',
    marginLeft:'-20%'
  },
  imageM:{
    width: '60%',
    height:'120%',
    marginRight:58,
    marginLeft:'-20%',
    top:'-9%'

  },
  Txt416: {
    fontSize: 40,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: '80%',
    height:'100%',
    paddingLeft:-10,
    
    // height: 50,
    // marginRight: 66,
    // zIndex:0
  },
  Group73: {
    width: '100%',
    height: '100%',
    marginRight:-140
    
  },
  Txt829: {
    fontSize: 46,
    fontWeight: "800",
    color: "rgba(53,53,53,1)",
  },

  Ellipse44: {
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "rgba(188,0,99,1)",
    // width: 17,
    // height: 17,
    // borderRadius: 8.5,
    marginLeft:-10,
    top:'-10%'
  },

  
  Group251: {
    display: "flex",
    flexDirection: "row",
  },
  Group250: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 149,
  },
  Group438: {
    paddingTop: 21,
    paddingBottom: 16,
    paddingLeft: 26,
    paddingRight: 19,
    marginRight: 52,
    // backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zwfun8dm1uh-591%3A49?alt=media&token=0c6ddfd1-0f7b-42e8-bda3-b945626cac56) */
    mixBlendMode: "luminosity",
    width: 60,
    height: 46,
  },
  Txt884: {
    fontSize: 4,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 13,
    height: 7,
  },

  Group118: {
    width: 46,
    height: 23,
  },
  Txt829: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(53,53,53,1)",
  },

  Group85: {
    borderRadius: 8.5,
    backgroundColor: "rgba(188,0,99,1)",
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 17,
    height: 17,
  },
  Txt191: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
});




