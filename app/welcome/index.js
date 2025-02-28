import { ScrollView, Text, StyleSheet } from "react-native-web";

export default function Welcome() {
    return (
        <ScrollView>
            <Text >
                <Text>
                    Welcome to Little Lemon
                </Text>
                <Text>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },

    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },

    text_highlight: {
        padding: '1rem',
    },
})
