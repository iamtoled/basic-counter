import React, { useEffect } from "react";
import { Text, View, ViewStyle } from "react-native";
import { colors } from "../utils/style-const";

export default function MagicComponent({
  setVisualCounter,
  style = {},
}: {
  setVisualCounter: React.Dispatch<React.SetStateAction<number>>;
  style?: ViewStyle;
}) {
  useEffect(() => {
    const magicNumber = Math.round(Math.random() * 100);
    setVisualCounter(magicNumber);
  }, []);

  return (
    <View style={{ backgroundColor: colors.five, padding: 20, borderRadius: 10, ...style }}>
      <Text style={{ fontSize: 24 }}>Changement magique</Text>
    </View>
  );
}
