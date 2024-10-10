import { NavigationProp } from "@react-navigation/native";
import SignIn from "./sing-in"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

type AuthLayoutProps = {
    navigation: NavigationProp<any, any>;
}

const AuthLayout = ({ navigation} : AuthLayoutProps) => {

    return (
        // <Stack.Navigator>
        //     <Stack.Screen
        //         name="SignIn"
        //         component={SignIn}
        //         options={{ headerShown: false }}
        //     />
        // </Stack.Navigator>
        <>
          <SignIn 
            navigation={navigation}
          />  
        </>
    )
}

export default AuthLayout;