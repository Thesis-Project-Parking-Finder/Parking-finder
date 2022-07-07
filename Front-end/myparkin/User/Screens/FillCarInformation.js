import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ParkingNameAndAdress } from "../redux/Features/BookPlace";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
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
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [carName, setcarName] = useState("");
  const [Hours, setHours] = useState(0);

  useEffect(() => {
    setglobalState((prevstate) => ({
      ...prevstate,
      Date: datee,
      Duration: Hours,
    }));
  }, [Hours, datee]);

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
      <Text style={styles.header}> Peek your Time </Text>
      <Icon name="calendar" size={20} style={styles.date}></Icon>
      <Text style={styles.datetext}>{datee}</Text>
      <View style={styles.pickdate}>
        <Button title="pick date" onPress={showDatepicker}></Button>
      </View>
      <Icon name="clock" size={20} style={styles.arrivalIcon}></Icon>
      <Text style={styles.arrivaltime}>{arrivalTime}</Text>
      <View style={styles.arrivalbtn}>
        <Button title="Starting " onPress={showTimepicker}></Button>
      </View>
      <Icon name="clock" size={20} style={styles.DepartureIcon}></Icon>

      <Text style={styles.departuretime}>{exitTime}</Text>
      <View style={styles.depbtn}>
        <Button
          title="Ending "
          onPress={() => {
            showTimepickerExit();
          }}
        ></Button>
        {console.log(globalState, "getting updated")}
      </View>

      {/* <TextInput style={styles.input} /> */}

      <TouchableOpacity
        style={styles.Group151}
        onPress={() => {
          dispatch(ParkingNameAndAdress(globalState));
          navigation.navigate("Parkingspot");
        }}
      >
        <Text style={styles.Txt917}>continue</Text>
      </TouchableOpacity>
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
    // backgroundColor: "pink",
    display: "flex",
    flex: 1,
    // position: "absolute",
    top: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  arrivalIcon: {
    position: "absolute",
    top: "41%",
    left: "9%",
  },
  Txt917: {
    fontSize: 17,
    width: "100%",
    height: 40,
    // height: "50%",
    //  fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "white",
    // backgroundColor: "red",
    bottom: 4,
    textAlign: "center",
    justifyContent: "center",
  },
  DepartureIcon: {
    position: "absolute",
    top: "61%",
    left: "9%",
  },
  date: {
    position: "absolute",
    top: "20%",
    left: "9%",
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
  carName: {
    fontSize: 15,
    position: "absolute",
    bottom: "35%",
    left: "4%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputt: {
    marginVertical: 30,
    position: "absolute",
    bottom: "20%",
    height: "10%",
    width: "100%",
    // backgroundColor: "pink",
  },
  departuretime: {
    position: "absolute",
    top: "60%",
    left: "18%",
    fontWeight: "bold",
    fontSize: 20,
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
    left: "18%",
    fontWeight: "bold",
    fontSize: 20,
  },
  Txt687: {
    fontSize: 48,
    //  fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 56,
    color: "rgba(3, 52, 83, 1)",
    width: 391,
    marginBottom: 36,
    paddingLeft: "35%",
    marginTop: "-10%",
    //  paddingTop:"10%"
  },
  arrivaltime: {
    position: "absolute",
    top: "40%",
    left: "18%",
    fontWeight: "bold",
    fontSize: 20,
  },

  pickdate: {
    width: "25%",
    position: "absolute",
    top: "20%",
    left: "60%",
  },
});

export default FillCarInformation;
