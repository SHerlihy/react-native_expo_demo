import React, { useState } from 'react';
import {StyleSheet, Text, Pressable, View } from 'react-native';

import TextThemed from "../shared/text/index.js"
import LoginInput from "./components/LoginInput.js"

export default function Login() {
    const [isLogIn, setIsLogIn] = useState(false)
    return (
        <View>
            {!isLogIn &&
                <LoginInput />
            }
            {!isLogIn &&
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
            }
            {isLogIn &&
                <TextThemed>
                    You are logged in
                </TextThemed>
            }
        </View>
    );
}

const styles = StyleSheet.create({
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
