import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import TopServices from "./TopServices"; // Import the new component
import { Colors, Typography } from "../../styles";
import { scaleSize } from "../../styles/mixins";
import AvailableList from "./AvailableList";
import RBSheet from 'react-native-raw-bottom-sheet';


const sortOptions = [
  { id: "1", label: "Most Popular", icon: "fire" },
  { id: "2", label: "Ratings", icon: "star" },
  { id: "3", label: "Price (High to Low)", icon: "cash-multiple" },
  { id: "4", label: "Price (Low to High)", icon: "cash-multiple" },
];

const SearchScreen = ({ navigation }) => {
  const refRBSheet = useRef();
  const [searchText, setSearchText] = useState("");

  const [selectedSort, setSelectedSort] = useState("Price (Low to High)");
  const [tempSort, setTempSort] = useState(selectedSort);

  // Popular searches data
  const popularSearches = [
    "Indoor Cleaning",
    "Plumbing Drain Repair",
    "Electrical Help",
    "Interior Painting",
    "Packing and unpacking",
    "Home Repairs",
    "Laundry Service",
  ];

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: "#FFFFFF", width: '100%',
        paddingHorizontal: 10,
        paddingTop: 10,
        borderBottomWidth: 1, borderBottomColor: Colors.INPUT_BORDER_COLOR
      }}>


        <View style={styles.searchContainer}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.inputWrapper}>
            <Icon name="magnify" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder='Search for "Indoor Cleaning"'
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />

            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")} style={styles.clearButton}>
                <Icon name="close-circle" size={20} color={Colors.TEXT_COLOR} />
              </TouchableOpacity>
            )}
          </View>
        </View>

      </View>

      {searchText !== '' ? (
        <>
          <View style={{
            backgroundColor: Colors.WHITE, width: '100%',
            paddingHorizontal: 25,
            padding: 15, alignSelf: "center"
          }}>
            <Text style={styles.resultText}>6 results for “Indoor Cleaning” around Ikeja</Text>
          </View>



          {/* Header */}
          <View style={{
            backgroundColor: Colors.WHITE, width: '100%',
            paddingHorizontal: 25,
            padding: 15, alignSelf: "center"
          }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Available Bookord</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: Colors.BORDER,
                borderRadius: 20,
                paddingHorizontal: 12,
                paddingVertical: 6,
                marginRight: 10,
              }}
            >
              <Text style={{ color: Colors.TEXT_COLOR, fontSize: 14 }}>Sort by</Text>
              <Icon name="menu-down" size={20} color="#000" />
            </TouchableOpacity>
            {selectedSort && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.PRIMARY,
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 14 }}>{selectedSort}</Text>
                <TouchableOpacity onPress={() => setSelectedSort(null)} style={{ marginLeft: 6 }}>
                  <Icon name="close-circle" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          </View>

          <AvailableList />
        </>
      ) : (
        <>
          <View style={{
            backgroundColor: Colors.WHITE, width: '100%',
            paddingHorizontal: 25,
            paddingTop: 10, alignSelf: "center"
          }}>
            <Text style={styles.sectionTitle}>Popular Searches</Text>
            <View style={styles.chipContainer}>
              {popularSearches.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.chip}
                  onPress={() => setSearchText(item)}
                >
                  <Text style={styles.chipText}>{item}</Text>
                  <Icon name="arrow-top-right" size={14} color="black" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{
            backgroundColor: Colors.WHITE, width: '100%',
            paddingHorizontal: 25,
            paddingTop: 20,
            alignSelf: "center",
            margin: 10
          }}>
            <TopServices />
          </View>
        </>
      )}
      {/* Bottom Sheet for Sorting */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.3)" },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 16,
          },
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
          Sort by
        </Text>

        {/* Sort Options */}
        {["Most Popular", "Ratings", "Price (High to Low)", "Price (Low to High)"].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setTempSort(option)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>{option}</Text>
            {tempSort === option && <Icon name="check-circle" size={20} color="purple" />}
          </TouchableOpacity>
        ))}

        {/* Apply Button */}
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 12,
            borderRadius: 25,
            marginTop: 10,
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedSort(tempSort);
            refRBSheet.current.close();
          }}
        >
          <Text style={{ color: Colors.WHITE, fontSize: 16, fontWeight: "bold" }}>Apply</Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

export default SearchScreen;
