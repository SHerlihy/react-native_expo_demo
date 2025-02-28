import { Text, useColorScheme } from "react-native"

export default function TextThemed(props) {
    const colorScheme = useColorScheme()

    //for later
    //need to get fontsize from device/browser before adjusting like rem
    //const modFontSize = 30*fontScale
    return (
        <Text
            {...props}
            style={[
                props.style,
                {
                    color: colorScheme === 'light' ? '#222' : '#bbb',
                },
            ]}
        />
    )
}
