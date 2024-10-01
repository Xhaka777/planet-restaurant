import React, {useState} from "react";
import { Text, View, Image, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { Redirect } from "expo-router";


const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <View className="flex flex-row items-center">
            <Image
              source={images.Logo}
              className="w-[170px] h-[124px]"
              resizeMode="contain"
            />
          </View>
          <View className="relative mt-5">
            <Text className="text-3xl text-black font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Planet Acc.</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-black-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Planet Acc
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => navigation.navigate('(auth)')}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
}

export default Welcome;