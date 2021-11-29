import React, {useEffect} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LogoSplash } from "../../assets";
import { Gap } from "../../components";


const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <Image source={LogoSplash} />
            <Gap height={30}/>
            <Text style={styles.firstText}>Mining Apps</Text> 
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#e69138',
        flex: 1,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstText: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    }
});