import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Menu, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomDropdown = ({ label, data, onSelect }) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [focused, setFocused] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSelect = (item) => {
        setSelected(item);
        onSelect(item);
        closeMenu();
    };

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <TouchableOpacity
                        style={[styles.dropdown, focused && styles.focusedDropdown]}
                        onPress={openMenu}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    >
                        <Text style={selected ? styles.selectedText : styles.placeholder}>
                            {selected ? selected.label : "Choose one"}
                        </Text>
                        <Icon name="chevron-down" size={24} color="black" />
                    </TouchableOpacity>
                }
            >
                {data.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSelect(item)}>
                        <Text style={styles.menuItem}>{item.label}</Text>
                        <Divider />
                    </TouchableOpacity>
                ))}
            </Menu>
        </View>
    );
};

export default CustomDropdown;

const styles = {
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "white",
    },
    focusedDropdown: {
        borderColor: "#6A1B9A",
    },
    placeholder: {
        color: "#888",
    },
    selectedText: {
        color: "#000",
    },
    menuItem: {
        padding: 12,
        fontSize: 16,
        color: "#000",
    },
};
