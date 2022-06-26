import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { colors } from "../utils/style-const";

export default function BasicButton({
  children,
  onPress,
  style = {},
}: {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress: (args: any) => void;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: "auto",
        paddingVertical: 18,
        paddingHorizontal: 24,
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: colors.white, fontWeight: "bold" }}>{children}</Text>
    </TouchableOpacity>
  );
}
