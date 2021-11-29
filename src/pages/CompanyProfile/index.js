import React, {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { Header, TextInput, Gap, LongButton } from '../../components'
import {Picker} from '@react-native-picker/picker';

const CompanyProfile = () => {
    const [selectedValue, setSelectedValue] = useState();
    return (
        <View style={styles.container}>
            <Header title="Company Profile" subtitle="Please Input Your Company Profile!" onBack={() => {}} />
            <View style={styles.subContainer}>
                <TextInput label="Company Name" placeholder="Type Your Company Name"/>
                <Gap height={16}/>
                <TextInput label="Company Address" placeholder="Type Your Company Address"/>
                <Gap height={16}/>
                <Text style={styles.label}>Company City</Text>
                <View style={styles.picker} >
                <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Jakarta" value="jakarta" />
                    <Picker.Item label="Tangerang" value="tangerang" />
                    <Picker.Item label="Bandung" value="bandung" />
                    <Picker.Item label="Bogor" value="bogor" />
                </Picker>
                </View>
                <Gap height={24} />
                <LongButton text="Continue" />
            </View>
        </View>
    )
}

export default CompanyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    }, 
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    picker: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
    }
})
