import SignIn from "./sing-in"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

const AuthLayout = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthLayout;