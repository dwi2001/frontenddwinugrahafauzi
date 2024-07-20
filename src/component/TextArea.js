// TextAreaComponent.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextAreaComponent = ({ value }) => {
    return (
        <TextInput
            style={styles.textArea}
            value={value}
            editable={false}
            multiline
        />
    );
};

const styles = StyleSheet.create({
    textArea: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#f0f0f0',
        width: 260,
    },
});

export default TextAreaComponent;
