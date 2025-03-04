import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

import TextThemed from "../shared/text/index.js"
import LoginInput from "./components/LoginInput.js"
import BackgroundThemed from '../shared/BackgroundThemed.js';

export default function Login() {
    const [isLogIn, setIsLogIn] = useState(false)
    return (
        <BackgroundThemed>
            <View
                style={
                    styles.container
                }
            >
                {!isLogIn &&
                    <View>
                        <LoginInput />
                        <Pressable
                            style={styles.button}
                            onPress={() => setIsLogIn(true)}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                Log In
                            </Text>
                        </Pressable>
                    </View>
                }
                {isLogIn &&
                    <TextThemed>
                        You are logged in
                    </TextThemed>
                }
            </View>
        </BackgroundThemed>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
    },
})
