// TextInputComponent.js
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const TextInputComponent = ({ label, value, suffix = '', width }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, { width: width || 100 }]}
                value={value}
                editable={false}
                multiline
            />
            {suffix ? <Text style={styles.suffix}>{suffix}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    label: {
        fontWeight: '600',
        width: 100,
    },
    input: {
        height: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginLeft: 17,
        backgroundColor: 'white',
    },
    suffix: {
        marginLeft: 5,
    },
});

export default TextInputComponent;
