import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../styles";
import { scaleSize } from "../../styles/mixins";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get("window");

const PeopleAlsoAdd = ({ item, onPress ,addedItems, handleAddPress}) => {

    return (
        <View style={styles.cardContainer}>
            <View style={[styles.card,{
                 borderColor: addedItems[item.id] ? Colors.PRIMARY: '#ddd',
            }]}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={2}
                        style={styles.description}>{item.description}</Text>
                    <TouchableOpacity onPress={() => onPress("Hours", item)}>
                        <Text style={styles.learnMore}>Learn More</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>₦ {item.price}</Text>
                </View>
            </View>
            <TouchableOpacity 
             onPress={() => handleAddPress(item.id)}
            style={[styles.addButton,{
                backgroundColor: addedItems[item.id] ? 'white' : Colors.PRIMARY,
                borderWidth:addedItems[item.id]  ? 1 : 0,
                borderColor: addedItems[item.id] ? Colors.PRIMARY: '',

                }]}>
                <Text style={[styles.addText,{
                    color:addedItems[item.id ]? Colors.PRIMARY: Colors.WHITE
                }]}>{ addedItems[item.id] ? "Added" : "Add"}</Text>
                <Icon name={addedItems [item.id] ? "check-circle" : "plus"} size={20} color={addedItems[item.id] ? Colors.PRIMARY: Colors.WHITE} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: width / 2.6,
        marginRight: 15,
        borderRadius: 10,
        alignItems: "center",
        paddingBottom: 25,
        // backgroundColor:"cyan",
        height: height / 3.7

    },
    card: {
        width: "100%",
        // backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 20,
        overflow: 'visible',
        // backgroundColor:"red",
        height: '100%'
        // height:height/4
    },
    image: {
        width: "100%",
        height: 80,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: scaleSize(11),
        fontWeight: "500",
        marginBottom: 5,
        color: Colors.TEXT_COLOR,
        lineHeight: 19.6,
        letterSpacing: -0.03 * 11,
    },
    description: {
        fontSize: scaleSize(10),
        fontWeight: "400",
        marginBottom: 5,
        // color: Colors.TEXT_COLOR,
        color: '#777777',
        lineHeight: 15.6,
        letterSpacing: -0.03 * 10,
    },
    learnMore: {
        color: Colors.PRIMARY,
        fontSize: scaleSize(10),
        fontWeight: "700",
        marginBottom: 5,
        lineHeight: 15.6,
        letterSpacing: -0.03 * 10,
    },
    price: {
        // color: Colors.PRIMARY,
        color: '#777777',
        fontSize: scaleSize(10),
        fontWeight: "400",
        lineHeight: 15.6,
        letterSpacing: -0.03 * 10,
        marginTop: 5,
    },
    addButton: {
        position: "absolute",
        bottom: 8,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 10,
    },
    addText: {
        color: Colors.WHITE,
        fontSize: scaleSize(10),
        marginRight: 5,
        fontWeight: '500'
    },
});

export default PeopleAlsoAdd;
