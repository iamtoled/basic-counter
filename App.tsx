import { Slider } from "@miblanchard/react-native-slider";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BasicButton from "./src/components/BasicButton";
import MagicComponent from "./src/components/MagicComponent";
import { colors } from "./src/utils/style-const";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [visualCounter, setVisualCounter] = useState(counter);

  const [sliderValue, setSliderValue] = useState(3);

  const [showMagicComponent, setShowMagicComponent] = useState(false);

  useEffect(() => {
    setShowMagicComponent(false);

    if (counter % 5 === 0) {
      setVisualCounter(0);
    } else {
      setVisualCounter(counter);
    }

    if (counter !== 0 && counter % 7 === 0) {
      setShowMagicComponent(true);
    }
  }, [counter]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 0.5, justifyContent: "space-evenly", alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>{visualCounter} </Text>
        {showMagicComponent && <MagicComponent setVisualCounter={setVisualCounter} />}
      </View>

      <View
        style={{
          flex: 0.5,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <BasicButton
            onPress={() => {
              setCounter((old) => old - 1);
            }}
          >
            -1
          </BasicButton>
          <BasicButton
            onPress={() => {
              setCounter(0);
            }}
          >
            Réinitialiser
          </BasicButton>
          <BasicButton
            onPress={() => {
              setCounter((old) => old + 1);
            }}
          >
            +1
          </BasicButton>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 20 }}>
          <Slider
            maximumValue={10}
            minimumValue={0}
            value={sliderValue}
            onValueChange={(val) => {
              Array.isArray(val) && setSliderValue(val[0]);
            }}
            step={1}
            containerStyle={{ flex: 0.8 }}
            thumbStyle={{ backgroundColor: colors.primary }}
            minimumTrackTintColor={colors.primary}
          ></Slider>
          <Text style={{ fontSize: 24, flex: 0.2, textAlign: "center" }}>{sliderValue}</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "space-evenly" }}
        >
          <BasicButton
            onPress={() => {
              setCounter((old) => old - sliderValue);
            }}
          >
            Soustraire
          </BasicButton>
          <BasicButton
            onPress={() => {
              setCounter((old) => old + sliderValue);
            }}
          >
            Additioner
          </BasicButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
