import Logo from "../shared/logo/index.js"
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.toggleDrawer()
                }
                }
            >
                <View
                    style={styles.content}
                >
                    <Logo length={50} />
                    <Text style={styles.text}>
                        Little Lemon
                    </Text>
                </View>
                <View
                    style={styles.content}
                >
                    <Text>
                        &#9660;
                    </Text>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    //prefer grid as content will be subject to little change
    ////grid not allowed in native could use FlatList
    container: {
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
