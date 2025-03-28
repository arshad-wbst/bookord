import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonLoader = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
     <SkeletonPlaceholder backgroundColor="#F7F4FB" highlightColor="#F5F5F5">
        <View style={styles.header}>
          <View style={styles.circle} />
          <View style={styles.smallCircle} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.shortText} />
          <View style={styles.longText} />
          <View style={styles.longText1} />
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.button} />
          <View style={styles.button} />
        </View>

        <View style={[styles.buttonRow, { justifyContent: "space-around" }]}>
          <View style={styles.tabbox} />
          <View style={styles.tabbox} />
        </View>
        <View style={styles.linebox} />

        <View style={styles.contentContainer}>
          <View style={styles.contentLine1} />
          {["a", "b", "c"].map((_, index) => (
            <View key={index} style={styles.contentLine} />
          ))}
        </View>
        <View style={styles.contentContainer2}>
          {["a", "b", "c"].map((_, index) => (
            <View key={index} style={styles.contentLine} />
          ))}
        </View>
        <View style={{backgroundColor:'white'}}>

        <View style={styles.buttonRow}>
          <View style={styles.gridtitle} />
          <View style={styles.gridtitle1} />
        </View>
        <View style={styles.gridContainer}>
          {["1", "2", "3"].map((_, index) => (
            <View key={index} style={styles.gridBox} />
          ))}
        </View>
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor:"white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  circle: {
    width: "50%",
    height: 58,
    borderRadius: 50,
  },
  smallCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  shortText: {
    width: "45%",
    height: 20,
    borderRadius: 50,
    margin: 5,
  },
  longText: {
    width: "60%",
    height: 20,
    borderRadius: 50,
    margin: 5,
  },
  longText1: {
    width: "70%",
    height: 20,
    borderRadius: 50,
    margin: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  button: {
    width: "45%",
    height: 40,
    borderRadius: 50,
  },
  tabbox: {
    width: "30%",
    height: 17,
    borderRadius: 50,
  },
  linebox: {
    width: "100%",
    height: 2,
    backgroundColor: "#F7F4FB",
    marginVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  contentContainer2: {
    paddingHorizontal: 16,
  },
  contentLine1: {
    width: "45%",
    height: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  contentLine: {
    width: "100%",
    height: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10,

  },
  gridtitle:{
    width: "20%",
    height: 25,
    borderRadius: 50,
  },
  gridtitle1:{
    width: "30%",
    height: 20,
    borderRadius: 50,
  },
  gridBox: {
    width: 160, 
    height: 160, 
    borderRadius: 10,
    backgroundColor: "#F7F4FB",
    marginRight:5
  },
});

export default SkeletonLoader;
