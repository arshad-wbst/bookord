import { useState, useEffect } from "react";
import { Platform, Alert } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

// Initialize Google Geocoding API (Replace with your API Key)
Geocoder.init("YOUR_GOOGLE_MAPS_API_KEY");

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    let permission =
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await check(permission);

    if (result === RESULTS.GRANTED) {
      getCurrentLocation();
    } else {
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        Alert.alert("Permission Denied", "Enable location to use this feature.");
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Reverse Geocoding (Get Address from Coordinates)
        try {
          const geoResponse = await Geocoder.from(latitude, longitude);
          const address = geoResponse.results[0].formatted_address;
          setAddress(address);
        } catch (error) {
          console.log("Geocoding Error:", error);
        }
      },
      (error) => {
        Alert.alert("Location Error", error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return { location, address };
};

export default useLocation;
