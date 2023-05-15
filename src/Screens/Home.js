// React / ReactNative
import React from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Button, Icon } from "react-native-elements";

// Utilities
import { Animations } from "../UtilityComponents/Animations";

export const Home = ({ navigation }) => {
    const iconProps = {
        color: "#29669D",
        // borderRadius:50,
        iconStyle: { padding: 2 },
        size: 26,
    };

    return (
        <View style={styles.container}>
            <Text style={{ position: "absolute", top: 0, left: 0 }}>Home</Text>
            <Button title="Go to Tasks" onPress={() => navigation.navigate("Tasks")} />
            <Button title="Go to Rooms" onPress={() => navigation.navigate("Rooms")} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={styles.settingsBtn}
            >
                <Icon name="settings" type="ionicon" {...iconProps} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
    },

    settingsBtn: {
        position: "absolute",
        top: 0,
        left: "90%",
    },

    card: {
        height: 64,
        width: 400,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 10,
        paddingEnd: 20,
    },

    icon: {
        width: 40,
        height: 40,
    },
});
