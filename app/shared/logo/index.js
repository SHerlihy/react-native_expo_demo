import { Image, StyleSheet, View } from "react-native";

export default function Logo({ length }) {
    return (
        <Image
            style={[
                {
                    height: length,
                    width: length
                }
            ]}
            source={require('./logo.png')}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    logoImg: {
    }
})
