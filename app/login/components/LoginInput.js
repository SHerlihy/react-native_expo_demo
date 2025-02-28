import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';

import TextThemed from "../../shared/text/index.js"

export default function LoginInput() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <TextThemed style={styles.headerText}>
                Welcome to Little Lemon
            </TextThemed>
            <TextThemed style={styles.regularText}>
                Login to continue
            </TextThemed>
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={onChangeEmail}
                placeholder={'email'}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={onChangePassword}
                placeholder={'password'}
                keyboardType={'default'}
                secureTextEntry={true}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
});
