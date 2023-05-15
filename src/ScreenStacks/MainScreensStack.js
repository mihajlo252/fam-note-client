import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Tasks } from "../Screens/Tasks";
import { Rooms } from "../Screens/Rooms";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";


const Tab = createBottomTabNavigator();

export const MainScreensStack = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const iconProps = {
                        color: focused ? "#29669D" : "#29669D85",
                        // borderRadius:50,
                        iconStyle: { padding: 2 },
                        size: 26,
                    };
                    if (route.name === "Home") {
                        return <Icon name="house" type="material" {...iconProps} />;
                    }
                    if (route.name === "Tasks") {
                        return <Icon name="tasks" type="font-awesome-5" {...iconProps} />;
                    }
                    if (route.name === "Rooms") {
                        return <Icon name="meeting-room" type="material" {...iconProps} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Tasks" component={Tasks} />
            <Tab.Screen name="Rooms" component={Rooms} />
        </Tab.Navigator>
    );
};
