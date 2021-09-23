import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#AFA8BA",
    secondary: "#4A4453",
    bazaarBlue: "#916FF1",
    bazaarRed: "#EE4C3F",
  },
};

export default MyTheme;
