import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import GridItems from "./GridItems";
import ServiceItems from "./ServiceItems";
import CategoryItems from "./CategoryItems";
import { NoData, SkeletonCircle, SkeletoRactangle } from "./UIComponents";


// Temporary Static Data (Replace with API call in future)
const handymanServices = [
  { id: "1", title: "House Cleaners", price: "NGN5,000/hr", image: require("../../assets/images/cleaners.jpg") },
  { id: "2", title: "Electrical Help", price: "NGN3,000/hr", image: require("../../assets/images/electrician.png") },
  { id: "3", title: "Plumbing", price: "NGN4,000/hr", image: require("../../assets/images/plumber.png") },
  { id: "4", title: "Carpentry", price: "NGN3,500/hr", image: require("../../assets/images/electrician.png") },
];

const serviceList = [
  { id: "5", title: "Gardening", price: "NGN2,500/hr", image: require("../../assets/images/cleaners.jpg") },
  { id: "6", title: "Pest Control", price: "NGN3,000/hr", image: require("../../assets/images/electrician.png") },
  { id: "7", title: "Plumbing", price: "NGN4,000/hr", image: require("../../assets/images/plumber.png") },
  { id: "8", title: "Painting",price: "NGN4,000/hr", image: require("../../assets/images/images.jpeg") }
];
const categoryList = []

const ViewAll = () => {
  const route = useRoute();
  const { pagename } = route.params || { pagename: "Default Page" };
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  // Fetch data (Using static for now, replace with API in future)
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     // Simulate API Call Delay (Replace with real API request)

  //     setTimeout(() => {
  //       let shuffled = [...handymanServices].sort(() => Math.random() - 0.5);
  //       let coloredData = shuffled.map((item) => ({
  //         ...item,
  //         bgColor: getRandomColor(),
  //       }));
  //       setServices(coloredData);
  //       setLoading(false);
  //     }, 2000);

  //     // const response = await fetch("YOUR_API_URL");
  //     // const data = await response.json();
  //     // setServices(data.map(item => ({ ...item, bgColor: getRandomColor() })));
  //     // setLoading(false);

  //   } catch (error) {
  //     console.error("Error fetching services:", error);
  //     setLoading(false);
  //   }
  // };

  // Fetch Data (Simulating API Call)
  const fetchData = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        let data;
        if (pagename === "Handyman Services") {
          data = [...handymanServices];
        } else if (pagename === "Service List") {
          data = [...serviceList];
        } else if (pagename === "Category List") {
          data = [...serviceList];
        }
        else {
          data = [];
        }

 
      // Shuffle data without adding colors
      let shuffled = data.sort(() => Math.random() - 0.5);

      setServices(shuffled);
      setLoading(false);
    }, 2000);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pagename]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{pagename}</Text>

      {/* <Text style={styles.title}>All Handyman Services</Text>
       */}



      {pagename === "Handyman Services" && (
        <>

          {loading ? (
            <FlatList
              data={[{}, {}, {}, {}]}
              numColumns={2}
              keyExtractor={(_, index) => index.toString()}
              renderItem={() => (
                <SkeletoRactangle />
              )}
            />
          ) : services.length === 0 ? (
            <NoData navigation={navigation} />
          ) : (
            <FlatList
              data={services}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <GridItems item={item} />}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />

          )}
        </>
      )}

      {pagename === "Service List" && (
        <>
          {loading ? (
            <FlatList
              data={[{}, {}, {}, {}]}
              numColumns={2}
              keyExtractor={(_, index) => index.toString()}
              renderItem={() => (
                <SkeletoRactangle />
              )}
            />
          ) : services.length === 0 ? (
            <NoData navigation={navigation} />
          ) : (
            <FlatList
              data={services}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ServiceItems item={item} />}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          )}
        </>
      )}

      {pagename === "Category List" && (
        <>
          {loading ? (
            <FlatList
              data={[{}, {}, {}, {}]}
              numColumns={3}
              keyExtractor={(_, index) => index.toString()}
              renderItem={() => (
                <SkeletonCircle />
              )}
            />
          ) : services.length === 0 ? (
            <NoData navigation={navigation} />
          ) : (
            <FlatList
            data={services}
            numColumns={3} 
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CategoryItems item={item} loading={loading} onPress={()=> navigation.navigate('CategoryById',{ pagename: item.title})}/>}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
          
          )}
        </>
      )}
    </View>
  );
};


export default ViewAll;
