import { useDrawerStatus } from "@react-navigation/drawer";
import Logo from "../shared/logo/index.js"
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header({ navigation }) {
    const isDrawerOpen = useDrawerStatus() === 'open'
    return (
        <View
            style={
                {
                    backgroundColor: '#EE9972',
                    flex: 1,
                }
            }>
            <Pressable
                style={
                    styles.container
                }
                onPress={() => {
                    navigation.toggleDrawer()
                }
                }
            >
                <View
                    style={styles.centered}
                >
                    <Logo length={50} />
                    <Text style={styles.text}>
                        Little Lemon
                    </Text>
                </View>
                {!isDrawerOpen &&
                    <View
                        style={[
                            styles.centered,
                            {
                                alignItems: "flex-start",
                            }
                        ]}
                    >
                        <Text>
                            &#9660;
                        </Text>
                    </View>
                }
                {isDrawerOpen &&
                    <View
                        style={[
                            styles.righted,
                            {
                                alignItems: "flex-start",
                            }
                        ]}
                    >
                        <Text>
                            &#9650;
                        </Text>
                    </View>
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    //prefer grid as content will be subject to little change
    ////grid not allowed in native could use FlatList
    container: {
        padding: 20,
        flexShrink: 1,
    },
    centered: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 1,
    },
    righted: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexShrink: 1,
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
})
