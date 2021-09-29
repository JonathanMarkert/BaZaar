import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Map from "../components/Map";
import Theme from "../components/Theme";
import * as SMS from 'expo-sms';
import * as MailComposer from 'expo-mail-composer';
import { ProductsStackScreenProps } from '../navigation/ProductsNavigator';
import mockUsers from "../assets/DummyData/UserData"
import mockData from '../assets/DummyData/ProductData';


const data = {
  name: "Fine Car",
  price: 20,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
  category: "Car",
  address: "Någonsatans 15 Borås",
  email: "minEmail@gmail.com",
  phone: "070456423",
};

const userData = mockUsers;
const productData = mockData;

export default function DetailsScreen({ navigation, route }: ProductsStackScreenProps<'Details'>) {
  const { productId } = route.params;

  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(
       data.phone,
       ''
       )
    } else {
      Alert.alert('Sorry! No SMS available');
    }
  }
  
  const sendMail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      await MailComposer.composeAsync({
        recipients: 
        [data.email],
        subject: 'Intresst in ' + data.name,
        body: '',
      });
    } else {
      Alert.alert('Sorry! No Mail available');
    }
  }
  
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
                <View >
                  <Text style={styles.baseText}>
                    {data.description}
                  </Text>
                </View>
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
                  onPress={sendMail}
                >
                  <Text style={[styles.baseText, styles.buttonText]} >
                    {data.email.length > 18 ? data.email.substring(0, 15) + "..." : data.email }
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={sendSMS}
                >
                  <Text style={[styles.baseText, styles.buttonText]} >
                    {data.phone}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity 
                style={styles.mapContainer} 
                onPress={() => navigation.navigate('Map', { productId })}
              >
                <Map />
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
