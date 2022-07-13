import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Lottie from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from "@expo/vector-icons/build/FontAwesome5";
import { set } from "firebase/database";

const FillCarInformation = ({ navigation }) => {
  let dispatch = useDispatch();
  const data = useSelector((state) => state.bookplace.value);
  const [date, setDate] = useState(new Date());
  const [datee, setDatee] = useState("Date");
  const [globalState, setglobalState] = useState(data);
  const [exitTime, setexitTime] = useState("Exit time");

  const [arrivalTime, setarrivalTime] = useState("arrival Time");
  const [start, setstart] = useState(0);
  const [end, setend] = useState(0);

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [Hours, setHours] = useState(0);

  useEffect(() => {
    setglobalState((prevstate) => ({
      ...prevstate,
      Date: datee,
      Duration: Hours,
      arrivalTime: start,
      exitTime: end,
    }));
  }, [Hours, datee, start, end]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setDatee(String(currentDate).slice(0, 10));
  };

  const calculateDuration = (exitTime, arrivalTime) => {
    if (
      arrivalTime.indexOf(":") > 0 &&
      exitTime.indexOf(":") > 0 &&
      Number(exitTime.slice(0, 2)) > Number(arrivalTime.slice(0, 2))
    ) {
      let duration =
        Number(exitTime.slice(0, 2)) - Number(arrivalTime.slice(0, 2));
      return duration;
    }
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,

      mode: currentMode,
      is24Hour: true,
    });
  };
  const showModeT = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeT,

      mode: currentMode,
      is24Hour: true,
    });
  };

  const onChangeT = (event, selectedDate) => {
    const currentDate = selectedDate;
    setarrivalTime(String(currentDate).slice(16, 21));
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showModeT("time");
  };

  const onChangeExit = (event, selectedDate) => {
    const currentDate = selectedDate;
    setexitTime(String(currentDate).slice(16, 21));
    let exit = String(currentDate).slice(16, 21);
    exit = Number(exit.slice(0, 2));
    let arrival = Number(arrivalTime.slice(0, 2));
    let duration = exit - arrival;
    setstart(arrival);
    setend(exit);

    setHours(duration);
  };
  const showModeExit = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeExit,
      // onTouchCancel:calculateDuration(exitTime, arrivalTime),
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showTimepickerExit = () => {
    showModeExit("time");
  };

  return (
    <View style={styles.container}>
      <View style={styles.Frame218}>
        <TouchableRipple onPress={() => navigation.goBack()}>
          <Lottie
            source={require("./assets/arrow2.json")}
            autoPlay
            loop
            style={styles.Frame}
          />
        </TouchableRipple>
        <Text style={styles.Txt3107}>Pick Your Time</Text>
      </View>
      <Image style={styles.date} source={{uri: 'https://img.icons8.com/stickers/452/calendar.png'}} />
      <Text style={styles.datetext}>{datee}</Text>
      <View style={styles.pickdate}>
      <TouchableRipple
                  style={styles.Group220}
                  onPress={showDatepicker}>
                  <Text style={styles.Txt122}>Pick Date</Text>
                </TouchableRipple>
      </View>
      <Image style={styles.arrivalIcon} source={{uri: 'https://img.icons8.com/dusk/452/clock--v1.png'}} />
      <Text style={styles.arrivaltime}>{arrivalTime}</Text>
      <View style={styles.arrivalbtn}>
      <TouchableRipple
                  style={styles.Group220}
                  onPress={showDatepicker}>
                  <Text style={styles.Txt122}>Starting</Text>
                </TouchableRipple>
      </View>
      <Image style={styles.DepartureIcon} source={{uri: 'https://img.icons8.com/dusk/452/time-machine.png'}} />
      <Text style={styles.departuretime}>{exitTime}</Text>
      <View style={styles.depbtn}>
           <TouchableRipple
                  style={styles.Group220}
                  onPress={() => {
                    showTimepickerExit();
                  }}>
                  <Text style={styles.Txt122}>Ending</Text>
                </TouchableRipple>
        {console.log(globalState, "getting updated")}
      </View>
      <View style={styles.btncontainter}>
        <TouchableRipple style={styles.Frame178} onPress={() => {dispatch(ParkingNameAndAdress(globalState));
          navigation.navigate("ParkingSpot_1")}}>
        <Text style={styles.Txt191}>Continue</Text>
        </TouchableRipple>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top:'-45%'
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 14,
    left: '-17%'
  },
  Txt3107: {
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 34,
    color: "#104685",
    width: 282,
  },
  Group220: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    borderWidth: 2,
    borderStyle: "solid",

    borderColor: "#1464C2",
    width: 111,
    height: 37,
  },
  Txt122: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    // marginLeft:'4%',
    alignSelf:'center',
    left:'-7%',
    
  },
  arrivalIcon: {
    // position: "absolute",
    // top: "41%",
    // left: "9%",
    width:'15%',
    height:'8.25%',
    left:'-37%',
    top:'-1%'
  },
  DepartureIcon: {
    // position: "absolute",
    // top: "61%",
    // left: "9%",
    width:'15%',
    height:'8.25%',
    left:'-37%',
    top:'11%'

  },
  date: {
    // position: "absolute",
    // top: "20%",
    // left: "9%",
    width:'15%',
    height:'9%',
    left:'-37%',
    top:"-12%"
    
  },
  Group151: {
    position: "absolute",
    bottom: "3%",
    paddingTop: 16,
    paddingBottom: 14,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(58, 107, 204, 1)",
    width: 200,
    height: "8%",
  },
  departuretime: {
    position: "absolute",
    top: "60%",
    left: "25%",
    fontWeight: "bold",
    fontSize: 20,
    color:'#0260D1'
  },
  depbtn: {
    width: "25%",
    position: "absolute",
    top: "60%",
    left: "60%",
    fontWeight: "bold",
    fontSize: 20,
  },
  arrivalbtn: {
    width: "25%",
    position: "absolute",
    top: "40%",
    left: "60%",
    fontWeight: "bold",
    fontSize: 20,
  },
  header: {
    position: "absolute",
    top: 30,
    fontSize: 30,
  },
  datetext: {
    position: "absolute",
    top: "20%",
    left: "25%",
    fontWeight: "bold",
    fontSize: 20,
  },
  Txt687: {
    fontSize: 48,
    fontWeight: "600",
    lineHeight: 56,
    color: "rgba(3, 52, 83, 1)",
    width: 391,
    marginBottom: 36,
    paddingLeft: "35%",
    marginTop: "-10%",
    //  paddingTop:"10%"
    color:'#0260D1'

  },
  arrivaltime: {
    position: "absolute",
    top: "40%",
    left: "25%",
    fontWeight: "bold",
    fontSize: 20,
    color:'#0260D1'
  },

  pickdate: {
    width: "25%",
    position: "absolute",
    top: "20%",
    left: "60%",
  },
  
  btncontainter: {
    bottom: 10,
    height: "20%",
    width: "60%",
    left:'20%',
    top:'-9%'
  },
  Frame178: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: -100,
    paddingRight: 100,
    borderRadius: 50,
    backgroundColor: "#106EE0",
    top:'137%',
    left:'-47%'
  },
  Txt191: {
    fontSize: 16,
    width:'100%',
    fontWeight: "700",
    color: "white",
    left:'380%'
  },
});

export default FillCarInformation;
