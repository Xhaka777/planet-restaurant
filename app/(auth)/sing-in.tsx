import { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SignIn = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    return (
        <SafeAreaView className='h-full'>
            <ScrollView>
                <View
                    className="w-full flex justify-center h-full px-4 my-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
                        Log in to<Text className="text-secondary-200">Planet Acc</Text>
                    </Text>

                    <FormField
                        title="Email"
                        value={email}
                        handleChangeText={setEmail}
                        otherStyles="mt-7"
                        placeholder="Enter your email"
                    />

                    <FormField
                        title="Password"
                        value={password}
                        handleChangeText={setPassword}
                        otherStyles="mt-7"
                        placeholder="Enter your password"
                    />

                    <CustomButton 
                        title="Sign In"
                        handlePress={() => navigation.navigate("(tabs)")}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />    

                    <MaterialCommunityIcons 
                        name="face-recognition"
                        size={24}
                        color="black"
                    />

                    <View className="flex justify-center t-5 flex-row gap-2">
                        <Text className="text-lg text-black-100 font-pregular">
                            Don't have account?
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;