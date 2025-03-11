import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProjectInfo = ({ navigation }) => {
  const [showServiceDetails, setShowServiceDetails] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Project Information</Text>
          <Text style={styles.headerSubtitle}>3 Bale Close Ifako, Gbagada</Text>
        </View>
      </View>

      {/* Project Details */}
      <View style={styles.card}>
        <Text style={styles.title}>Indoor Cleaning</Text>
        <Text style={styles.projectId}>Project ID: #7890128</Text>
        <Text style={styles.description}>The Skillr will start - Wednesday, March 07 2023 @ 09:00AM</Text>
        <Text style={styles.subText}>One-Time Cleaning Service</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('ManageProject')}
          style={styles.button}><Text style={styles.buttonText}>Manage project</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add to calendar</Text></TouchableOpacity>
        </View>
      </View>

      {/* Requesting Provider */}
      <View style={styles.fullWidthCard}>
        <Text style={styles.sectionTitle}>Requesting the provider</Text>
        <Text style={styles.subText}>We will let you know when Palmcedar Cleaning accepts the offer</Text>
      </View>

      {/* Service Details */}
      <View style={styles.fullWidthCard}>
        <TouchableOpacity onPress={() => setShowServiceDetails(!showServiceDetails)} style={styles.serviceHeader}>
          <Text style={styles.sectionTitle}>Service Details</Text>
          <Icon name={showServiceDetails ? "chevron-up" : "chevron-down"} size={24} color="black" />
        </TouchableOpacity>
        {showServiceDetails && (
          <View style={styles.serviceContent}>
            <View style={styles.serviceCard}>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Date</Text><Text>Wed, March 7</Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Start time</Text><Text>9:00 - 11:00 AM</Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Skillr</Text><Text>Palmcedar Cleaning <Icon name="check-decagram" size={14} color="purple" /></Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>You selected</Text><Text>2 Skillr’s | 2 hours</Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Additional Service</Text><Text>Cupboard Cleaning</Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Size of home</Text><Text>1,000 - 3,000 sq ft</Text></View>
              <View style={styles.serviceRow}><Text style={styles.boldText}>Address</Text><Text>3 Bale Close Ifako, Gbagada</Text></View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: { flexDirection: "row", alignItems: "center", padding: 15, backgroundColor: "#FFF" },
  headerTextContainer: { marginLeft: 10 },
  headerTitle: { fontSize: 16, fontWeight: "bold" },
  headerSubtitle: { fontSize: 12, color: "gray" },
  card: { backgroundColor: "#FFF", padding: 15, margin: 10, borderRadius: 10, elevation: 2 },
  title: { fontSize: 18, fontWeight: "bold" },
  projectId: { fontSize: 14, color: "gray", marginBottom: 10 },
  description: { fontSize: 14, fontWeight: "bold" },
  subText: { fontSize: 14, color: "gray", marginBottom: 10 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: { backgroundColor: "#E5E5E5", padding: 10, borderRadius: 20, width: "48%", alignItems: "center" },
  buttonText: { fontSize: 14, fontWeight: "bold" },
  fullWidthCard: { backgroundColor: "#FFF", padding: 15, marginVertical: 5 },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },
  serviceHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  serviceContent: { marginTop: 10 },
  serviceCard: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, elevation: 2 },
  serviceRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  boldText: { fontWeight: "bold" },
});

export default ProjectInfo;
