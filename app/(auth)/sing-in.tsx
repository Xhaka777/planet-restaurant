import { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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