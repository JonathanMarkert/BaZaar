import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Header({ navigation }: any) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 90,
    opacity: 0.5,
    backgroundColor: "#AFA8BA",
    marginBottom: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingEnd: 10,
    paddingBottom: 10,

  },
  title:{
      color: "black",
      marginTop: "auto",
      alignItems: "center",
      justifyContent: "center",
      opacity: 1,
      fontSize: 20,
      fontWeight: "bold",
  }

});