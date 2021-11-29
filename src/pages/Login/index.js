import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, LongButton, TextInput } from '../../components'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Login" subtitle="Please Login With Your Account!"/>
            <View style={styles.subContainer}>
                <TextInput label="Email Address" placeholder="Type Your Email Address"/>
                <Gap height={16}/>
                <TextInput label="Password" placeholder="Type Your Password"/>
                <Gap height={24} />
                <LongButton text="Login"/>
                <Gap height={12}/>
                <LongButton text="Create New Account" color="#8D92A3" textColor="white" onPress={() => navigation.navigate('Signup')}/>
            </View>
        </View>
    )
}

export default Login

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
