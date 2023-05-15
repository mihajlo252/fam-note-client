// React / ReactNative
import { useEffect, useState } from "react";
import { Easing, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Stacks
import { MainScreensStack } from "./src/ScreenStacks/MainScreensStack";
import { SettingsScreenStack } from "./src/ScreenStacks/SettingsScreenStack";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: styles.header,
                        headerTitleStyle: styles.header_text,
                        statusBarColor: "#333",
                        animation: "fade_from_bottom",
                    }}
                >
                    <Stack.Screen name="FamNote" component={MainScreensStack} />
                    <Stack.Screen name="Settings" component={SettingsScreenStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
    },
    header: {
        height: 64,
        backgroundColor: "#29669D",
        // justifyContent: "center",
        // alignItems: "center",
        // paddingHorizontal: 16,
        // paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
    },
    header_text: {
        width: "auto",
        color: "white",
        fontWeight: "bold",
    },
});
