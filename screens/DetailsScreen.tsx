import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Theme from "../components/Theme";


const data = {
  name: "Fine Car",
  price: 20,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy.",
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
  category: "Car",
  address: "Någonsatans 15 Borås",
  email: "minEmail@gmail.com",
  phone: "0784324564",
};

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={require('../assets/bkg1.png')} style={styles.backgroundImg}>
        <Header title="Details" />
        <View style={styles.containerContent} >
          <View style={styles.imgContainer} >
            <Image 
              source={{uri: data.img}}
              style={styles.cover}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.alignCenter}>
              <Text style={[styles.titleText, styles.boldText]}>
                {data.name}
              </Text>
            </View>
            <View >
              <View style={styles.margine}>
                <Text style={[styles.baseText, styles.boldText]}>
                  Description:
                </Text>
                <ScrollView >
                  <Text style={styles.baseText}>
                    {data.description}
                  </Text>
                </ScrollView>
              </View>
              <View style={[styles.rowSpaceBetween, styles.alignCenter, styles.margine]}>
                <Text style={[styles.baseText, styles.boldText]}>
                  Price:
                </Text>
                <Text style={styles.baseText}>
                  {data.price} kr
                </Text>
              </View>
              <View style={[styles.rowSpaceBetween, styles.alignCenter, styles.margine]}>
                <Text style={[styles.baseText, styles.boldText]}>
                  Address: 
                </Text>
                <Text style={styles.baseText}>
                  {data.address}
                </Text>
              </View>
              <View style={[styles.rowSpaceBetween, styles.alignCenter, styles.margine]}>
                <View>
                  <Text style={[styles.baseText, styles.boldText]}>
                    Contact: 
                  </Text>
                </View>
              </View>
              <View style={styles.rowSpaceBetween}>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => Alert.alert('email button')}
                >
                  <Text style={[styles.baseText, styles.buttonText]} >
                    {data.email.length > 18 ? data.email.substring(0, 15) + "..." : data.email }
                    {/* {data.email} */}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => Alert.alert('phone button')}
                >
                  <Text style={[styles.baseText, styles.buttonText]} >
                    {data.phone}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.mapContainer}>
                {/* Go to map */}
                <Text style={styles.baseText}>
                  Map 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  containerContent: {
    flex: 1,
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.lightBg,
    width: 350,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  cover: {
    width: 300,
    height: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    justifyContent: "space-evenly",
    backgroundColor: "#FAF6F6",
    width: 350,
    minHeight: 410,
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
  },
  mapContainer: {
    backgroundColor: "gray",
    width: "auto",
    height: 100,
    marginTop: 4,
  },
  alignCenter: {
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: Theme.colors.bazaarBlue,
    padding: 10,
  },
  titleText:{
    fontSize: 20,
  },
  baseText: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff"
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  margine: {
    margin: 3,
  },
});
