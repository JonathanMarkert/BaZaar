import LottieView from "lottie-react-native";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Theme from "../components/Theme";

interface Props {
  confirmSuccess: () => void;
}

export default function SuccessScreen({ confirmSuccess }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <LottieView
          source={require("../assets/lf30_editor_igh8onny.json")}
          loop={false}
          autoPlay
          onAnimationFinish={confirmSuccess}
        />
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
});
