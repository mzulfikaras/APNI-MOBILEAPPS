import React from 'react'
import { StyleSheet, Text, TextInput as InputText, View } from 'react-native'

const TextInput = ({label, placeholder}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text> 
            <InputText placeholder={placeholder} style={styles.input} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        padding: 10
    }
})
