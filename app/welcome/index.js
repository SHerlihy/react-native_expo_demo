import { StyleSheet, Text, View } from "react-native";
import BackgroundThemed from "../shared/BackgroundThemed";
import TextThemed from "../shared/text";

export default function Welcome() {
    return (
        <BackgroundThemed>
            <View
                style={
                    styles.container
                }
            >
                <Text
                    style={
                        styles.chapter
                    }
                >
                    <TextThemed>
                        Welcome to Little Lemon
                    </TextThemed>
                    <Text>&nbsp;</Text>
                    <TextThemed>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                    </TextThemed>
                </Text>
            </View>
        </BackgroundThemed>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },

    chapter: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
})
