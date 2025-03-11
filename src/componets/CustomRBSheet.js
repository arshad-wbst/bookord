import React, { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { View, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Obj } from "../styles/constants";

const CustomRBSheet = forwardRef(({ title, children ,content}, ref) => {
  const sheetRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      setTimeout(() => {
        sheetRef.current?.open();
      }, 50);
    },
    close: () => {
      sheetRef.current?.close();
    },
  }));


  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown={true}
      height={Obj[content]}
      openDuration={250}
      customStyles={{
        wrapper: { backgroundColor: "rgba(0,0,0,0.3)" },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          minHeight: 100, // Prevents very small content causing flickering
        },
        draggableIcon: {
          backgroundColor: "#ccc",
          width: 50,
          height: 6,
          borderRadius: 3,
          alignSelf: "center",
        },
      }}
    >
      <View
        style={{ width: "100%", alignItems: "center", paddingBottom: 20 }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
        //   setContentHeight(height + 50); // Add padding for better UI
        }}
      >
        {title && (
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#000", marginBottom: 10 }}>
            {title}
          </Text>
        )}
        {children}
      </View>
    </RBSheet>
  );
});

export default CustomRBSheet;
