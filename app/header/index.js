import { useState } from "react";
import Logo from "../shared/logo/index.js"
import { Pressable, StyleSheet, Text, View } from "react-native";
import RoutesMenu from "./components/RoutesMenu.js"

export default function Header({ navigation }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setIsOpen(!isOpen)}
            >
                <div
                    style={styles.content}
                >
                    <Logo length={50} />
                    <Text style={styles.text}>
                        Little Lemon
                    </Text>
                </div>
                <div
                    style={styles.content}
                >
                    <Text>
                        {!isOpen && <>&#9660;</>}
                        {isOpen && <>&#9650;</>}
                    </Text>
                </div>
            </Pressable>
            {isOpen && <RoutesMenu navigation={navigation} />}
        </View>
    )
}

const styles = StyleSheet.create({
    //prefer grid as content will be subject to little change
    ////grid not allowed in native could use FlatList
    container: {
        padding: 5,
        backgroundColor: '#EE9972',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
})
