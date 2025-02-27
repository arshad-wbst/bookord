import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../../hook/useLocation";
// import useLocation from "./useLocation";

const MapScreen = () => {
  const { location, address } = useLocation();

  if (!location) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Fetching Location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Pin at Current Location */}
        <Marker coordinate={location} title="Your Location" description={address}>
          {/* <Image source={require("./pin.png")} style={{ width: 40, height: 40 }} /> */}
        </Marker>
      </MapView>

      {/* Show Address at Bottom */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>📍 {address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MapScreen;
