import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/context/ThemeProvider";
// import { BlurView } from '@react-native-community/blur'
import { BlurView } from 'expo-blur'


export default function Payment() {
    const { theme, toggleTheme } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                <View />
            </Pressable>
            <BlurView
                experimentalBlurMethod="dimezisBlurView"
                intensity={90}
                tint="light"
                style={{
                    height: '50%',
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    elevation: 8,
                    shadowColor: '#000',
                    shadowRadius: 8,
                    shadowOpacity: 0.15,
                    padding: 16
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#007AFF', fontSize: 17 }}>Cancel</Text>
                    </Pressable>
                </View>
                <View style={{ gap: 10, paddingTop: 16 }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: 'gray'
                        }}
                    >
                        Pare pare ....
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 32,
                            fontWeight: '900',
                            marginTop: 16
                        }}
                    >
                        123,123
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        a ki sok t'zi edhe ni hamburgj
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                            backgroundColor: 'black',
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 16
                        }}
                    >
                        <Text></Text>
                    </TouchableOpacity>
                </View>

            </BlurView>
        </View>
    )
}
