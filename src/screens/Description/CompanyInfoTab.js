import React from "react";
import { View, Text } from "react-native";
import ProjectsSection from "./ProjectsSection";
import styles from "./styles";


const CompanyInfo = () => {
  return (
    <View style={{flex:1}}>
    <View style={styles.companyInfoContainer}>
      {/* About Section */}
      <Text style={styles.sectionTitle}>About Palmcedar Cleaning</Text>
      <Text style={styles.companyDescription}>
        Praesent sit amet felis quis massa bibendum iaculis et vel est.
        Suspendisse at lectus neque. Nunc eu mauris in diam ultricies porttitor
        a ut ligula.
      </Text>
      <Text style={styles.companyDescription}>
        Sed nec ligula quam. Phasellus lacinia quis lorem non ultricies.
        Fusce molestie nulla et pulvinar cursus.
        Praesent sit amet felis quis massa bibendum iaculis et vel est.
        Suspendisse at lectus neque. Nunc eu mauris in diam ultricies porttitor
        a ut ligula.
      </Text>
  
    </View>
    <View style={styles.projectsContainer}>
      <ProjectsSection />
      </View> 
    </View>
  );
};

export default CompanyInfo;
