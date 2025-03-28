import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import CompanyInfoTab from "./CompanyInfoTab";
import ReviewsTab from "./ReviewsTab";
import { Colors } from '../../styles';
import SkeletonLoader from './SkeletonLoader';

const DescriptionScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Company Info");
  const [msgTab, setMsgTab] = useState("Message");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
          <Text style={styles.headerTitle}>Palmacedar Cleaning</Text>
          <Icon name="check-decagram" size={18} color={Colors.PRIMARY} style={{ marginTop: 5, marginLeft: 5 }} />
        </View>
        <View style={{ width: 24 }} />
      </View>

      {loading ? (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <SkeletonLoader />
        </ScrollView>
      ) : (

        <ScrollView>
          <View style={styles.companyContainer}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 5 }}>
                <Text style={styles.companyName}>Palmacedar {'\n'} Cleaning</Text>
                <Icon name="check-decagram" size={20} color={Colors.PRIMARY} style={{ marginTop: 5, marginLeft: 5 }} />
              </View>
              <View style={styles.ratingRow}>
                <Icon name="star" size={16} color={Colors.ICON_COLOR} />
                <Text style={styles.ratingText}>4.7 (115 Reviews)</Text>
              </View>
              <View style={styles.locationRow}>
                <Icon name="map-marker" size={16} color="gray" />
                <Text style={styles.locationText}>Ikeja, Nigeria • Available</Text>
              </View>
              <View style={styles.similarJobsRow}>
                <Icon name="check-circle" size={16} color={Colors.PRIMARY} />
                <Text style={styles.similarJobsText}>2 similar jobs completed near you</Text>
              </View>
            </View>
            <Image source={require("../../assets/images/cleaning.png")} style={styles.companyLogo} />
          </View>
          <View style={styles.actionButtons}>
            {["Message", "Add to favorites"].map((tab) => (
              <TouchableOpacity key={tab} onPress={() => setMsgTab(tab)} style={[styles.messageButton, msgTab !== tab && styles.activemessageButton]}>
                <Text style={[styles.buttonText, msgTab === tab && styles.activebuttonText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.tabsContainer}>
            {["Company Info", "Reviews"].map((tab) => (
              <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tabButton, {
                borderBottomWidth: activeTab === tab && 3
              }]}>
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {activeTab === "Company Info" ? <CompanyInfoTab /> : <ReviewsTab />}
        </ScrollView>
      )}
    </View>
  );
};

export default DescriptionScreen;
