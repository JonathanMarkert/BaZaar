import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useProductContext } from "../contexts/ProductContext";

interface Props {
  productId: string;
}

export default function Map({ productId }: Props) {
  const { products } = useProductContext();
  const product = products.find((product) => product.id === productId);

  if (!product)
    return (
      <View>
        <Text>No Location found</Text>
      </View>
    );

  const productLatitude = product.latitude;
  const productLongitude = product.longitude;

  const { width, height } = Dimensions.get("window");
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
    <MapView style={styles.map} initialRegion={region} zoomTapEnabled={false}>
      <Marker coordinate={region} title="Marker" />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
