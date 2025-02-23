import { View } from "react-native";

import Header from "./header/index"
import Footer from "./footer/index"
import Login from "./login"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: '#495E57',
      }}
    >
        <Header/>
            <Login/>
        <Footer />
    </View>
  );
}
