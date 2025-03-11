import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const NoInternet = ({ onRetry }) => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image
        source={require("../assets/images/offline.png")}
        style={styles.image}
        resizeMode="contain"
      />


      <Text style={styles.title}>YOUR INTERNET IS NOT AVAILABLE</Text>

      <Text style={styles.message}>
        Try switching to a different connection or reset your internet to find a professional.
      </Text>


      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>RETRY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E2A3D",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#1E2A3D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  retryButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NoInternet;
