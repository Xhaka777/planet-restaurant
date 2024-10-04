import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./details";
import Payment from "./sheets/Payment";

const Stack = createNativeStackNavigator();

const DetailsLayout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    presentation: 'transparentModal',
                    animation: 'slide_from_bottom',
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default DetailsLayout;