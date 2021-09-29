import React, { useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 57.7210; // borås
const LONGITUDE = 12.9398; // borås
const LATITUDE_DELTA = 0.0922; //vet inte vad den gör
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; //vet inte vad den gör

export default function Map() {

  const [region, setRegion] = useState({
    latitude: LATITUDE,    // initial location latitude
    longitude: LONGITUDE,  // initial location longitude
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <MapView 
      style={styles.map}
      initialRegion={region}
      zoomTapEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
