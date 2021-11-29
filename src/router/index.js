import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CompanyProfile, Login, Signup, SplashScreen } from "../pages";


const Stack = createStackNavigator();
const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options = {{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options = {{headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} options = {{headerShown: false}} />
            <Stack.Screen name="CompanyProfile" component={CompanyProfile} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router;