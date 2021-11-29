import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Gap, LongButton } from '../../components'

const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Sign Up" subtitle="Please Create Your Account!" onBack={() => {}} />
            <View style={styles.subContainer}>
                <TextInput label="Full Name" placeholder="Type Your Full Name"/>
                <Gap height={16}/>
                <TextInput label="Email Address" placeholder="Type Your Email Address"/>
                <Gap height={16}/>
                <TextInput label="Password" placeholder="Type Your Password"/>
                <Gap height={24} />
                <LongButton text="Continue" onPress={() => navigation.navigate('CompanyProfile')} />
            </View>
        </View>
    )
}

export default Signup

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
    }
})
