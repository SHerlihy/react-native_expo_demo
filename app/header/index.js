import { StyleSheet } from "react-native";
import { Text, View } from "react-native-web";

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Little Lemon Restaurant
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EE9972',
    },

    text: {
        fontSize: '2rem',
        color: 'black',
    },
})
