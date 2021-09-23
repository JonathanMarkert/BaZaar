import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, ImageBackground, } from "react-native";
import { StatusBar } from 'expo-status-bar'
import Header from "../components/Header";

// const BazzarImg = require('../assets/Bazaar-background.png');

const background = { uri: 'https://images.unsplash.com/photo-1600700574045-fa86ced80a05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'}

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={background} style={styles.backgroundImg}>
          <Header />
        <View style={styles.containerContent}>
          <Text>This is the HomeScreen</Text>
          {/* <Button
            title="Go to Products"
            onPress={() => navigation.navigate("Products")}
          /> */}
        </View>
      </ImageBackground>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
  }
});
