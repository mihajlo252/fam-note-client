import React from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { ApiCall } from "../UtilityComponents/ApiCall";
import { Formik } from "formik";

export const Tasks = ({ navigation }) => {
    const data = ApiCall();

    // console.log(data);
    return (
        <ScrollView>
            <Formik
                initialValues={{
                    text: "",
                }}
                onSubmit={(values) => Alert.alert(JSON.stringify(values.text))}
            >
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    isValid,
                    handleSubmit,
                }) => (
                    <View>
                        <TextInput
                            value={values.name}
                            onChangeText={handleChange("text")}
                            onBlur={() => setFieldTouched("text")}
                            placeholder="Text"
                        />
                        <Button
                            color="#3740FE"
                            title="Submit"
                            disabled={!isValid}
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
            {/* {data.map((entry, idx) => (
                <View key={idx} style={styles.card}>
                    <Text>{entry.title}</Text>
                    <Text style={styles.quote}>-{entry.id}</Text>
                </View>
            ))} */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
});
