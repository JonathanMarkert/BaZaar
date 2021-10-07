import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Map from "../components/Map";
import Theme from "../components/Theme";
import * as SMS from "expo-sms";
import * as MailComposer from "expo-mail-composer";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import { useProductContext } from "../contexts/ProductContext";

export default function DetailsScreen({
  navigation,
  route,
}: ProductsStackScreenProps<"Details">) {
  const { productId } = route.params;
  const {products, dispatch} =useProductContext();
  const product = products.find(product => product.id === productId);

  if (!product)
    return (
      <View>
        <Text>No Product found</Text>
      </View>
    ); //returnera error not found

  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(product.phone, "");
    } else {
      Alert.alert("Sorry! No SMS available");
    }
  };

  const sendMail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      await MailComposer.composeAsync({
        recipients: [product.email],
        subject: "Intresst in " + product.name,
        body: "",
      });
    } else {
      Alert.alert("Sorry! No Mail available");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <ScrollView style={styles.containerContent}>
          <View style={styles.imgContainer}>
            <Image source={{ uri: product.imageUri }} style={styles.cover} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.alignCenter}>
              <Text style={[styles.titleText, styles.boldText]}>
                {product.name}
              </Text>
            </View>
            <View>
              <View style={styles.margine}>
                <Text style={[styles.baseText, styles.boldText]}>
                  Description:
                </Text>
                <View>
                  <Text style={styles.baseText}>{product.description}</Text>
                </View>
              </View>
              <View
                style={[
                  styles.rowSpaceBetween,
                  styles.alignCenter,
                  styles.margine,
                ]}
              >
                <Text style={[styles.baseText, styles.boldText]}>Price:</Text>
                <Text style={styles.baseText}>{product.price} kr</Text>
              </View>
              <View
                style={[
                  styles.rowSpaceBetween,
                  styles.alignCenter,
                  styles.margine,
                ]}
              >
                <Text style={[styles.baseText, styles.boldText]}>Address:</Text>
                <Text style={styles.baseText}>{product.city}</Text>
              </View>
              <View
                style={[
                  styles.rowSpaceBetween,
                  styles.alignCenter,
                  styles.margine,
                ]}
              >
                <View>
                  <Text style={[styles.baseText, styles.boldText]}>
                    Contact:
                  </Text>
                </View>
              </View>
              <View style={styles.rowSpaceBetween}>
                <TouchableOpacity style={styles.button} onPress={sendMail}>
                  <Text style={[styles.baseText, styles.buttonText]}>
                    {product.email.length > 18
                      ? product.email.substring(0, 15) + "..."
                      : product.email}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={sendSMS}>
                  <Text style={[styles.baseText, styles.buttonText]}>
                    0{product.phone}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.mapContainer}
                onPress={() => navigation.navigate("Map", { productId })}
              >
                <Map productId={productId} />
              </TouchableOpacity>
            </View>
            
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.defaultBg,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  containerContent: {
    flex: 1,
    marginTop: 104,
    marginBottom: 80,
    marginHorizontal: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.lightBg,
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  cover: {
    width: "90%",
    height: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    justifyContent: "space-evenly",
    backgroundColor: Theme.colors.lightBg,
    width: "100%",
    minHeight: 400,
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
  },
  mapContainer: {
    backgroundColor: Theme.colors.defaultMapBg,
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
  titleText: {
    fontSize: 20,
  },
  baseText: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonText: {
    color: Theme.colors.buttonText,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  margine: {
    margin: 3,
  },
});
