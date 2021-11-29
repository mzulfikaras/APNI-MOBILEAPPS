import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Longbutton = ({text, color = '#e69138', textColor = '#020202', onPress}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <View style={styles.container(color)}>
                    <Text style={styles.text(textColor)}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Longbutton

const styles = StyleSheet.create({
    container: (color) => ({
            backgroundColor: color ,
            padding: 12,
            borderRadius: 8
    }),
    text: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: textColor,
        textAlign: 'center'
    })
})
