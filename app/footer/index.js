import { StyleSheet } from "react-native";
import { Text, View } from "react-native-web";

export default function Footer(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EE9972'
    },
    
    text:{
        color: 'black'
    },
})
