import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";

const projectsData = [
    { id: "1", image: require("../../assets/images/cleaning.png") },
    { id: "2", image: require("../../assets/images/cleaning.png") },
    { id: "3", image: require("../../assets/images/cleaning.png") },


];

const ProjectsSection = () => {
    return (
      <View style={styles.projectsContainer}>
        <View style={styles.projectsHeader}>
          <Text style={styles.projectsTitle}>Projects</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all &gt;</Text>
          </TouchableOpacity>
        </View>
  <View style={{width:'95%',alignSelf:"center"}}>
        <FlatList
          data={projectsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            
            <Image source={item.image} style={styles.projectImage} />
          )}
        />
        </View>
      </View>
    );
  };
  

export default ProjectsSection;
