import { Text, View, useColorScheme } from "react-native";

import Header from "./header/index"
import Footer from "./footer/index"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from "./welcome/index.js"
import Login from "./login/index.js"
import Menu from "./menu/index.js"
import Logo from "./shared/logo";

export default function Index() {
    const colorScheme = useColorScheme()
    const Stack = createNativeStackNavigator()

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
                screenOptions={{
                    header: (props) => <Header navigation={props.navigation}/>
                }}
            >
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
            <Footer />
        </View>
    );
}

