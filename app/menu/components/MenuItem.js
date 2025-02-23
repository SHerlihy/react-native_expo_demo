import { Text, View } from "react-native-web";

export default function MenuItem({item}){
    return (
        <View>
            <Text>{item.name}: {item.price}</Text>
        </View>
    )
}
