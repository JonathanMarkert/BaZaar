import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Theme from "../components/Theme";

interface Props {
  title: string;
}

export default function Header() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 114,
    backgroundColor: Theme.colors.primary95,
    marginBottom: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingEnd: 10,
    paddingBottom: 10,
  },
  // Sparar Denna stylingen tills vi är helt överens om att detta är lösningen vi vill köra på

  // title: {
  //   color: "black",
  //   marginTop: "auto",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   opacity: 1,
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
});
