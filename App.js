import { StatusBar } from "expo-status-bar";
import {
    Button,
    NativeModules,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
const { StatusBarManager } = NativeModules;
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title_text}>FamNote</Text>
            </View>
            <ScrollView contentContainerStyle={styles.main}>
                <Text style={styles.main_text}>FamNote</Text>
                <Button title="Click" onPress={() => alert("FAMNOTE")} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        height: 64,
        backgroundColor: "purple",
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
    },
    title_text: {
        color: "white",
        fontWeight: "bold",
    },
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    main_text: {
        backgroundColor: "#f90",
        color: "white",
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
    },
});
