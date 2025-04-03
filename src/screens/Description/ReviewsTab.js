import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import PrimaryButton from "../../componets/PrimaryButton";
import CustomRBSheet from "../../componets/CustomRBSheet";
import { Colors } from '../../styles';

const reviewsData = [
  {
    id: "1",
    name: "Md Faizan",
    date: "22 May 2024",
    rating: 4.7,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo facilisis, mollis dolor bibendum, tempor dolor.",
    services: ["Indoor Cleaning", "Cupboard Cleaning"],
  },
  {
    id: "2",
    name: "Shafeeque",
    date: "20 May 2024",
    rating: 4.4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo facilisis, mollis dolor bibendum, tempor dolor.",
    services: ["Indoor Cleaning"],
  },
  {
    id: "3",
    name: "Naushad",
    date: "22 May 2024",
    rating: 4.7,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo facilisis, mollis dolor bibendum, tempor dolor.",
    services: ["Indoor Cleaning", "Cupboard Cleaning"],
  },
];

const Reviews = () => {
  const refRBSheet = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Last 120 days");

    const [selectedSort, setSelectedSort] = useState("Last 30 days");
    const [tempSort, setTempSort] = useState(selectedSort);


  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedSort(tempSort);
      refRBSheet.current.close();
    }, 2000);

  };

  const openSheet = () => {
    setTimeout(() => {
      refRBSheet.current?.open();
    }, 100);
  };
  return (
    <View style={styles.reviewsContainer}>
      <Text style={styles.reviewsTitle}>115 Reviews</Text>
      <TouchableOpacity
        onPress={openSheet}
        style={styles.filterContainer}>
        <Text style={styles.filterText}>{selectedSort}</Text>
        <Icon name="chevron-down" size={20} color="gray" />
      </TouchableOpacity>
      <FlatList
        data={reviewsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            {/* Header: Avatar, Name, Date, and Rating */}
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name?.slice(0, 2).toUpperCase() || 'NA'}</Text>
              </View>
              <View style={styles.reviewInfo}>
                <Text style={styles.reviewName}>{item.name}</Text>
                <Text style={styles.reviewDate}>{item.date}</Text>
              </View>
              <View style={styles.reviewRating}>
                <Icon name="star" size={16} color="gold" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>

            {/* Review Text */}
            <Text style={styles.reviewText}>{item.review}</Text>

            <View style={styles.servicesContainer}>
              {item.services.map((service, index) => (
                <View key={index} style={styles.serviceTag}>
                  <Text style={styles.serviceText}>{service}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
      <CustomRBSheet
        ref={refRBSheet}
        content='medium'
        title='Reviews'>
        {["Last 30 days", "Last 60 days", "Last 90 days", "Last 120 days"].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setTempSort(option)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              width:'95%'
            }}
          >
            <Text style={{ fontSize: 16 }}>{option}</Text>
            {tempSort === option && <Icon name="check-circle" size={20} color={Colors.PRIMARY} />}
          </TouchableOpacity>
        ))}
        <PrimaryButton
          title="Submit"
          onPress={handleSubmit}
          loading={loading}
          textColor="white"
          customStyle={{
            opacity: loading ? 0.5 : 1,
            backgroundColor: Colors.PRIMARY,
            alignSelf: 'center',
            width: '100%',
            marginTop: 20,

          }}
        />
      </CustomRBSheet>
    </View>
  );
};

export default Reviews;
