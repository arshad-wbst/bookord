import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { Colors } from "../../styles";

const ProjectInfo = ({ navigation }) => {
  const [showServiceDetails, setShowServiceDetails] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Project Information</Text>
          <Text style={styles.headerSubtitle}>3 Bale Close Ifako, Gbagada</Text>
        </View>
        <View
          style={styles.addButton}>
        </View>

      </View>
      <ScrollView>
        {/* Project Details */}
        <View style={styles.card}>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.title}>Indoor Cleaning</Text>
            <Text style={styles.projectId}>Project ID: #7890128</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.description}>The Skillr will start - Wednesday, March 07 2023 @ 09:00AM</Text>
            <Text style={styles.subText}>One-Time Cleaning Service</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ManageProject')}
              style={styles.button}><Text style={styles.buttonText}>Manage project</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add to calendar</Text></TouchableOpacity>
          </View>
        </View>

        {/* Requesting Provider */}
        <View style={styles.fullWidthCard}>
          <Text style={styles.sectionTitle}>Requesting the provider</Text>
          <Text style={styles.subText}>We will let you know when Palmcedar Cleaning accepts the offer</Text>
        </View>

        <View style={styles.confirmationBox}>
          <Text style={styles.heading}>Your project has been booked!</Text>
          <View style={styles.progressContainer}>
            <View style={styles.step}>
              <View style={styles.activeStep}>
                <Icon name="check" size={20} color="white" />
              </View>
              <Text style={styles.activeText}>Booked</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
              <View style={styles.inactiveStep} />
              <Text style={styles.inactiveText}>On the way</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
              <View style={styles.inactiveStep} />
              <Text style={styles.inactiveText}>Started</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
              <View style={styles.inactiveStep} />
              <Text style={styles.inactiveText}>Completed</Text>
            </View>
          </View>

          {/* Booking Details */}
          <Text style={styles.bookingText}>
            You booked this project on Monday, March 05, 2023 for Wednesday, March 07, 2023
          </Text>

          <View style={styles.divider} />

          {/* Service Provider Card */}
          <View style={styles.serviceCard}>
            <Image
              source={require("../../assets/images/cleaning.png")}
              style={styles.serviceImage}
            />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>Palmcedar Cleaning <Icon name="check-decagram" size={14} color={Colors.PRIMARY} /></Text>
              <View style={styles.ratingRow}>
                <Icon name="star" size={16} color="black" />
                <Text style={styles.ratingText}>4.7</Text>
                <Text style={styles.reviewCount}>(115)</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('DescriptionScreen')}
              style={{ flexDirection: "row", alignItems: 'center' }}>
              <Text style={styles.viewProfile}>View Profile</Text>
              <Icon name={"chevron-right"} size={24} color="#313131" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Service Details */}
        <View style={styles.card}>
          <TouchableOpacity onPress={() => setShowServiceDetails(!showServiceDetails)} style={styles.serviceHeader}>
            <Text style={styles.sectionTitle}>Service Details</Text>
          </TouchableOpacity>
          {showServiceDetails && (
            <View style={styles.serviceContent}>
              <View style={styles.titleContainer}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                  <Image source={require("../../assets/images/cleaning.png")} style={styles.icon} />
                  <Text style={styles.titleText}>Indoor Cleaning</Text>
                </View>
                <TouchableOpacity onPress={() => setShowServiceDetails(!showServiceDetails)} >
                  <Icon name={showServiceDetails ? "chevron-up" : "chevron-down"} size={24} color="#313131" />
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
              <View style={styles.rowContainer}>
                <View style={styles.column}>
                  <Text style={styles.boldText}>Date</Text>
                  <Text>Wed, March 7</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.column}>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.boldText}>Start time</Text>
                    <Text>9:00 - 11:00 AM</Text>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <DetailRow label="Bookord" value={<Text>Palmcedar Cleaning <Icon name="check-decagram" size={14} color="purple" /></Text>} />
              <View style={styles.divider} />
              <View style={styles.rowContainer}>
                <View style={styles.column}>
                  <Text style={styles.boldText}>You selected</Text>
                  <Text>2 Bookord’s | 2 hours</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.column}>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.boldText}>Additional Service</Text>
                    <Text>Cupboard Cleaning</Text>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <DetailRow label="Size of home" value={<Text>1,000 - 3,000 sq ft </Text>} />
              <View style={styles.divider} />
              <DetailRow label="Address" value={<Text>3 Bale Close Ifako, Gbagada</Text>} />
            </View>
          )}
          <View style={styles.serviceBottom}>
            <View style={styles.bottomContent}>
              <Text style={styles.subtotal_txt}>Sub Total</Text>
              <Text style={styles.subtotal_txt}>₦ 12,300</Text>
            </View>
            <View style={styles.bottomContent}>
              <Text style={styles.subtotal_txt}>Processing fee</Text>
              <Text style={styles.subtotal_txt}>₦ 2,300</Text>
            </View>
            <View style={styles.bottomContent}>
              <Text style={[styles.subtotal_txt, { color: "#777777" }]}>Promo code (20% OFF)</Text>
              <Text style={[styles.subtotal_txt, { color: "#777777" }]}>- ₦ 2,100</Text>
            </View>
            <View style={styles.bottomContent}>
              <Text style={[styles.booking_cost]}>Booking Cost</Text>
              <Text style={[styles.booking_cost, { color: "#1B2431" }]}>₦ 2,100</Text>
            </View>
          </View>
          <Text style={styles.bottomtxt}>You won’t be charged until the job is completed.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.boldText}>{label}</Text>
    <Text>{value}</Text>
  </View>
);




export default ProjectInfo;
