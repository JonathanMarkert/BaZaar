import React, { FC } from "react";
import { View } from "react-native";

interface Props {
  height?: number;
  width?: number;
}

const SizedContainer: FC<Props> = ({ height, width }) => {
  return <View style={{ height, width }} />;
};

export default SizedContainer;
