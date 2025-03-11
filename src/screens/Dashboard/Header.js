import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={{flexDirection:"row",alignItems:"center",}}>
      <Icon name="account-circle" size={24} color={Colors.WHITE} />
      <Text style={styles.greeting}>Good Afternoon, Ayomide</Text>
      </View>
      <Icon name="bell-ring-outline" size={24} color={Colors.WHITE} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.PRIMARY,
  },
  greeting: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft:8
  },
});

export default Header;
