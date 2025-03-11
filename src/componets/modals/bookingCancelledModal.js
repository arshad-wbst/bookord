import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BookingCancelledModal = ({ visible, onClose, onNewBooking }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={false} // Full screen modal
    >
      <View style={styles.container}>
        {/* Close Button on the Right */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>

        {/* Success Icon */}
        <View style={styles.successIcon}>
          <Icon name="check-circle" size={50} color="green" />
        </View>

        {/* Title & Subtitle */}
        <Text style={styles.title}>Your booking has been cancelled.</Text>
        <Text style={styles.subtitle}>
          We’re sorry to see you go. If you ever need a service again, keep us in mind!
        </Text>

        {/* Make Another Booking Button */}
        <TouchableOpacity style={styles.button} onPress={onNewBooking}>
          <Text style={styles.buttonText}>Make another booking</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  successIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#0D253F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default BookingCancelledModal;
