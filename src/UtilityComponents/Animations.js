import React, { useRef } from "react";
import { Animated } from "react-native";

export const Animations = () => {
    const fadeAnim = new Animated.Value(1).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    return [fadeAnim, fadeIn, fadeOut]
};
