import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import ServiceList from "./ServiceList";
import HandymanList from "./HandymanList";
import { Colors } from "../../styles";
import ThanksModal from "../../componets/modals/thanksModal";
import { useInternet } from "../../hook/InternetProvider";
import NoInternet from "../../componets/NoInternet";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = ({}) => {
  const navigation = useNavigation();
    const { isConnected, checkInternet } = useInternet();
  const [modalVisible, setModalVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);


  useEffect(() => {
    if (!modalVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 500); 

      return () => clearTimeout(timer);
    }
  }, [modalVisible]);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]); 


  if (!isConnected) {
    return <NoInternet onRetry={checkInternet} />;
  }


  const handleSearchPress = () => {
    navigation.navigate("SearchScreen");
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.stickyHeader]}>
        <Header />
        <TouchableOpacity onPress={handleSearchPress} activeOpacity={1}>
        <SearchBar
        showTooltip={showTooltip}
        onClose={()=>setShowTooltip(false)} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[{ key: "services" }, { key: "categories" }, { key: "handyman" }]} 
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          switch (item.key) {
            case "services":
              return <ServiceList />;
            case "categories":
              return <CategoryList />;
            case "handyman":
              return <HandymanList />;
            default:
              return null;
          }
        }}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false} 
      />

       <ThanksModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  stickyHeader: {
    backgroundColor: Colors.PRIMARY,
    paddingBottom: 10,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10, 
  },
  listContent: {
    paddingBottom: 20,
  },
  noInternetContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  noInternetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noInternetMessage: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#1E2A3D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  retryButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
