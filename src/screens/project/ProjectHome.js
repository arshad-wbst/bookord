import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import InProgress from "./InProgress";
import Completed from "./Completed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, Typography } from "../../styles";
import RBSheet from 'react-native-raw-bottom-sheet';
import { scaleSize } from "../../styles/mixins";

const services = [
  "All services type",
  "Cleaning",
  "Plumbing",
  "Electrical Help",
  "Painting",
];

const ProjectHome = ({navigation}) => {
  const refRBSheet = useRef();
  const [activeTab, setActiveTab] = useState("In Progress");
  const [selectedService, setSelectedService] = useState("All services type");

  const handleApplyFilter = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected Filter:", filter);
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.title}>Projects</Text>
        <TouchableOpacity
         onPress={() => refRBSheet.current.open()}
         style={styles.filterButton}>
          <Text style={{color:Colors.TEXT_COLOR,fontFamily:Typography.FONT_FAMILY_GENERAL_REGULAR,fontSize:scaleSize(13)}}>Filter</Text>
          <Icon name="menu-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        {["In Progress", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab === "In Progress" ? <InProgress onPress={()=> navigation.navigate("ProjectInfo")}/> : <Completed />}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        // closeOnPressMask={false}
        height={325}
        openDuration={250}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.3)" },
          container: { borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 16 },
          draggableIcon: {
            backgroundColor: "#ccc",
            width: 50,
            height: 6,
            borderRadius: 3,
            alignSelf: "center",
          },
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 ,textAlign:"center"}}>
          Filter by service type
        </Text>
        <FlatList
          data={services}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedService(item)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item}</Text>
              {selectedService === item && (
                <Icon name="check-circle" size={20} color={Colors.PRIMARY}/>
              )}
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 12,
            borderRadius: 25,
            marginTop: 10,
            alignItems: "center",
          }}
          onPress={() => {
            // onApply(selectedService);
            refRBSheet.current.close();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Apply
          </Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center",height:34 },
  title: { fontSize: 24, fontWeight: "bold",color:Colors.TEXT_COLOR },
  filterButton: { flexDirection: "row", alignItems: "center", padding: 8, borderWidth: 1, borderRadius: 15,borderColor:Colors.INPUT_BORDER_COLOR },
  tabContainer: { flexDirection: "row", marginTop: 10, borderBottomWidth: 1 ,width:'100%',height:40,},
  tab: { padding: 10, flex: 1, alignItems: "center" },
  activeTab: { borderBottomWidth: 2, borderBottomColor:Colors.PRIMARY,},
  tabText: { fontSize: 14, color: "#666" },
  activeTabText: { color: Colors.PRIMARY, fontWeight: "bold" },
});

export default ProjectHome;
