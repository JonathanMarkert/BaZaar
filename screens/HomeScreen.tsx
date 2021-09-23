import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
