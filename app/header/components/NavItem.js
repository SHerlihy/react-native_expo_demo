import { Pressable, Text } from "react-native";

export default function NavItem({ navigation, dest }) {
    return (
        <Pressable
            onPress={() => { navigation.navigate(dest) }}
        >
            <Text>
                {dest}
            </Text>
        </Pressable>
    )
}
