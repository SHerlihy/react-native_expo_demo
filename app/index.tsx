import { Text, View, useColorScheme } from "react-native";

import Header from "./header/index"
import Footer from "./footer/index"

import { createDrawerNavigator } from "@react-navigation/drawer"

import Welcome from "./welcome/index.js"
import Login from "./login/index.js"
import Menu from "./menu/index.js"
import Logo from "./shared/logo";

export default function Index() {
    const colorScheme = useColorScheme()
    const Stack = createDrawerNavigator()

    return (
        <View
            style={[
                {
                    backgroundColor: colorScheme === 'light' ? '#bbb' : '#222',
                },
                {
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'space-between',
                },
            ]}
        >
            <Stack.Navigator
                initialRouteName="welcome"
                screenOptions={(props) => ({
                    headerLeft: () => null,
                    headerLeftContainerStyle: {
                        display: "none",
                    },

                    headerTitle: () => <Header navigation={props.navigation} />,
                    headerTitleContainerStyle: {
                        marginLeft: 0,
                        marginRight: 0,
                        left: 0,
                        flex: 1,
                        maxWidth: null,
                    },
                    headerTitleAlign: "center",

                    headerRight: () => null,
                    headerRightContainerStyle: {
                        display: "none",
                    },
                })
                }
            >
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
            <Footer />
        </View>
    );
}

