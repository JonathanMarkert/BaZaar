import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

interface Props {
  title: string,
}

export default function Header({ title }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 90,
    opacity: 0.7,
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