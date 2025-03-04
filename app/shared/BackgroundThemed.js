import { View, useColorScheme } from "react-native";

export default function BackgroundThemed({ children }) {
    const colorScheme = useColorScheme()

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
                    padding: 20,
                },
            ]}
        >
            {children}
        </View>
    )
}
