import { FlatList, StyleSheet, Text, View } from "react-native";
import NavItem from "./NavItem.js";

export default function RoutesMenu({ navigation }) {
    const navNames = [
        { title: 'welcome' },
        { title: 'login' },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={navNames}
                renderItem={({ item }) => <NavItem navigation={navigation} dest={item.title} />}
            />
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
})
