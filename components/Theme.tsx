import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#AFA8BA",
    primary95: "rgba(175, 168, 186, 0.95)",
    primary70: "rgba(175, 168, 186, 0.7)",
    secondary: "#4A4453",
    bazaarBlue: "#916FF1",
    bazaarRed: "#EE4C3F",
    buttonText: "#FFF",
    lightBg: "#FAF6F6",
    defaultBg: "#FFF",
    defaultMapBg: "#808080",
    shadowColor: "#000",
    borderButtonColor: "#000",
    filterModal: "#C5BED0",
  },
};

export default MyTheme;
