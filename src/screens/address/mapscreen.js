import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import useLocation from "../../hook/useLocation";
// import useLocation from "./useLocation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../../styles";
import PrimaryButton from "../../componets/PrimaryButton";

const { width, height } = Dimensions.get("window");

const MapScreen = ({ navigation }) => {
   const [loading, setLoading] = useState(false);
  // const { location, address } = useLocation();

  // if (!location) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //       <Text>Fetching Location...</Text>
  //     </View>
  //   );
  // }

  const [region, setRegion] = useState({
    latitude: 6.6018, 
    longitude: 3.3515,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [address, setAddress] = useState("Tisco Plaza House, Ikeja\nLagos, Nigeria");

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLocation({ latitude, longitude });

    setAddress(`Updated Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
  };

  const handleNext = () => {
    if (address) {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('AdditionalAddressScreen', { address: address });
        }, 2000);
    }
};

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={22} color={Colors.BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm your home address</Text>
      </View>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      />
      <View style={styles.markerFixed}>
        <View style={styles.markerContainer}>
          <Icon name="map-marker-outline" size={22} color={Colors.WHITE} />
        </View>
        <View style={styles.markerStick} />
      </View>

      {/* Address Box */}
      <View style={styles.addressContainer}>
        <Icon name="map-marker-radius-outline" size={22} color={Colors.BLACK} style={styles.locationIcon} />
        <View style={styles.addressTextContainer}>
          <Text style={styles.addressTitle}>Tisco Plaza House, Ikeja</Text>
          <Text style={styles.addressSubtitle}>Lagos, Nigeria</Text>
        </View>
      </View>
      <PrimaryButton
        title="Confirm location"
        onPress={handleNext}
        loading={loading}
        textColor="white"
        customStyle={{
          opacity: loading  ? 0.5 : 1,
          backgroundColor: Colors.PRIMARY,
          alignSelf: 'center',
          width: '90%',
        }}
      />

      {/* Confirm Button */}
      {/* <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm location</Text>
      </TouchableOpacity> */}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "80%",
  },
  markerFixed: {
    position: "absolute",
    top: height / 2 - 30,
    left: width / 2 - 15,
    alignItems: "center",
  },

  markerContainer: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 5,
  },

  markerStick: {
    width: 2,
    height: 15,
    backgroundColor: Colors.BLACK,
    marginTop: -2,
  },

  addressContainer: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  locationIcon: {
    marginRight: 10,
  },
  addressTextContainer: {
    flex: 1,
    // backgroundColor:"cyan"
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  confirmButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#001F54",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },











});

export default MapScreen;
