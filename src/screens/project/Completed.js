import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const SkeletonLoader = () => (
  <SkeletonPlaceholder>
  <View style={styles.card}>
    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
    <View style={styles.skeletonTitle} />
    <View style={styles.skeletonStatus}></View>
    </View>
    <View style={styles.skeletonRow} />
    <View style={styles.skeletonRow} />
    <View style={styles.skeletonRow} />
    <View style={styles.skeletonButton} />
  </View>
  </SkeletonPlaceholder>
);

const Completed = () => {
    const navigation = useNavigation()
  
    const [loading, setLoading] = useState(true);
    const [inCompleteProjects, setCompletedProjects] = useState([]);

      useEffect(() => {
        setTimeout(() => {
          setCompletedProjects([
            {
              id: "1",
              title: "Carpet Cleaning",
              serviceType: "One-Time Cleaning Service",
              provider: "ABC Cleaning Services",
              date: "Tue, 7 Mar",
              time: "1:00 PM - 3:00 PM",
              status: "Completed",
            },
            {
              id: "2",
              title: "Plumbing Service",
              serviceType: "One-Time Cleaning Service",
              provider: "Palmcedar Cleaning",
              date: "Wed, 8 Mar",
              time: "9:00 AM - 11:10 AM",
              status: "Processing", 
            },
          ]);
          setLoading(false);
        }, 3000); 
      }, []);

  return (
     <FlatList
          data={loading ? [1, 2, 3] : inCompleteProjects}
          keyExtractor={(item, index) => (loading ? index.toString() : item.id)}
          renderItem={({ item }) =>
            loading ? (
              <SkeletonLoader />
            ) : (
        <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.status}>{item.status}</Text>
                    </View>
                    <View style={styles.details}>
                      <View style={styles.detailRow}>
                        <Icon name="calendar" size={16} color="#6D6D6D" />
                        <Text style={styles.detailText}>Scheduled for {item.date}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Icon name="clock-outline" size={16} color="#6D6D6D" />
                        <Text style={styles.detailText}>{item.time}</Text>
                      </View>
                      {item.serviceType ? (
                        <View style={styles.detailRow}>
                          <Icon name="repeat" size={16} color="#6D6D6D" />
                          <Text style={styles.detailText}>{item.serviceType}</Text>
                        </View>
                      ) : null}
                      <View style={styles.detailRow}>
                        <Icon name="account" size={16} color="#6D6D6D" />
                        <Text style={styles.detailText}>
                          {item.provider} <Icon name="check-decagram" size={14} color="purple" />
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Rate Service</Text>
                    </TouchableOpacity>
                  </View>
            )
          }
        />
      );
    };

const styles = StyleSheet.create({
   card: { backgroundColor: "#FFF", borderRadius: 10, padding: 15, marginVertical: 10, elevation: 2, borderWidth: 1,borderColor:Colors.INPUT_BORDER_COLOR },
   cardHeader: { flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, paddingBottom: 15,borderColor:Colors.INPUT_BORDER_COLOR },
   title: { fontSize: 16, fontWeight: "bold" },
   status: { fontSize: 14, color: "gray" },
   details: { marginTop: 10 },
   detailRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
   detailText: { marginLeft: 5, fontSize: 14, color: "#6D6D6D" },
   button: { borderWidth: 1, borderColor: "#1B2431 ", padding: 8, alignItems: "center", borderRadius: 20, marginTop: 10 },
   buttonText: { fontSize: 13, fontWeight: "700" },

    // Skeleton styles
    skeletonTitle: { width: "60%", height: 20, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 10 },
    skeletonStatus: { width: "30%", height: 20, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 10 },
  
    skeletonRow: { width: "80%", height: 15, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 8 },
    skeletonButton: { width: "50%", height: 30, backgroundColor: "#F7F4FB", borderRadius: 20, marginTop: 10 },
});

export default Completed;
