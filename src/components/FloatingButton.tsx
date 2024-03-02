import React, { ReactNode } from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from "react-native";

type floatButtonProps = {
  children: ReactNode,
  onPress: (event: GestureResponderEvent) => void
};

const FloatingButton = ({children, onPress} : floatButtonProps) => {

  return(
    <TouchableOpacity
      onPress={onPress}
      style={styles.touchWrapper}
    >
      <View
        style={styles.roundButton}
      ></View>
      <View style={styles.children}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchWrapper: {
    top: -35,
    zIndex: 1,
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  roundButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 40,
    bottom: -5,
    backgroundColor: 'black',
  },
  children: {
    top: 18,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

export default FloatingButton;