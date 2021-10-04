import React, { useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View, Text } from "react-native";
import MapView from 'react-native-maps';
import mockData from "../assets/DummyData/ProductData";

interface Props {
  productId: string;
}

export default function Map({ productId }: Props) {
  const product = mockData.find(product => product.id === productId);

  if (!product) return( 
    <View>
      <Text>No Location found</Text>
    </View>
  ); //returnera error not found
  
  const productLatitude = product.latitude;
  const productLongitude = product.longitude;

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = productLatitude; 
  const LONGITUDE = productLongitude; 
  const LATITUDE_DELTA = 0.0922; 
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; 

  const [region, setRegion] = useState({
    latitude: LATITUDE,    
    longitude: LONGITUDE,  
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
