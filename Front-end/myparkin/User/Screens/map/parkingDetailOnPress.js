import Carousel from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import MarkersInformation from "./MarkersInformation";
import React, { Component } from "react";
import styless from "./them";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MarkersInformation,
    };
  }
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slider}>
        {/* {console.log(this.props)} */}
        <Text style={styles.cardTitle}>{item.parkingName}</Text>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        ></Image>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={this.state.MarkersInformation}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={300}
        onSnapToItem={(index) => {
          this.props.onCarouselIetmChange(index, this.state.MarkersInformation);
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    bottom: 0,
    position: "absolute",
  },

  slider: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 210,
    width: 300,
    padding: 24,
    borderRadius: 24,
    // backgroundColor: "blue",
  },
  cardTitle: {
    top: 0,
    color: "white",
    fontSize: 22,
    alignSelf: "center",
  },
  btnContainer: {},
});

export default MyCarousel;
