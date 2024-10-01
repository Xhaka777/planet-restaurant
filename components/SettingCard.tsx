// import {}
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native'
import { darkTheme, icons, lightTheme } from "../constants";
import { useTheme } from "@/context/ThemeProvider"
import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/FontAwesome5";

const SettingCard = () => {
    // const isSwitchOn = useSelector((state) => state.switch.isSwitchOn);
    // const dispatch = useDispatch();
  
    const { theme, toggleTheme } = useTheme();
    const [isEnable, setIsEnabled] = useState(theme === darkTheme);
  
    const handleToggle = () => {
      setIsEnabled((previousState) => !previousState);
      toggleTheme();
    };
  
    return (
      // <SafeAreaView className="bg-primary h-full">
      //   <ScrollView>
      <View className="flex flex-col items-start w-full">
        {/* ACCOUNT */}
        <View className="flex flex-row mt-1 mb-1">
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#705cb4"
          />
          <Text
            className="text-l font-semibold  font-psemibold ml-2"
            style={{ color: theme.text }}
          >
            Account
          </Text>
        </View>
        <View
          className=" w-full h-35 rounded-2xl px-4"
          style={{ backgroundColor: theme.bgSecondary }}
        >
          <TouchableOpacity className="flex flex-row justify-start mt-5">
            <Text
              className="text-l font-semibold font-psemibold"
              style={{ color: theme.text }}
            >
              Test Testi
            </Text>
          </TouchableOpacity>
          <View className="my-3 w-full border-[0.2px] border-gray-400" />
          <TouchableOpacity className="flex flex-row justify-start mb-3">
            <Text className="text-l font-semibold font-psemibold" style={{ color: theme.text }}>
              agjentitest4@gmail.com
            </Text>
          </TouchableOpacity>
        </View>
  
        <View
          className="w-full h-35 rounded-2xl px-4 mt-10 mb-1"
          style={{ backgroundColor: theme.bgSecondary }}
        >
          <View className="flex flex-row justify-between items-center mt-5">
            <Text
              className="text-l font-semibold font-psemibold mb-3"
              style={{ color: theme.text }}
            >
              Apperance
            </Text>
  
            <TouchableOpacity
              className={`w-[50] h-[30] rounded-md justify-center items-center mb-3`}
              style={{ backgroundColor: theme.bgSecondary }}
              onPress={handleToggle}
            >
              <Icon name={isEnable ? "moon" : "sun"} size={24} color={theme.text} />
            </TouchableOpacity>
          </View>
        </View>
  
        {/* SOME CHECKS... */}
  
        <View className="flex flex-row mt-10 mb-1">
          <Image
            source={icons.setting}
            className="w-5 h-5"
            style={{ tintColor: "#705cb4" }}
          />
  
          <Text
            className="text-l font-semibold font-psemibold ml-2"
            style={{ color: theme.text }}
          >
            Settings
          </Text>
        </View>
        <View
          className="w-full h-35 rounded-2xl px-4"
          style={{ backgroundColor: theme.bgSecondary }}
        >
          <View className="flex flex-row justify-between items-center mt-5">
            <Text
              className="text-l font-semibold font-psemibold "
              style={{ color: theme.text }}
            >
              FaceID
            </Text>
            <Switch
            //   value={isSwitchOn}
              thumbColor='#705cb4'
              trackColor={{ false: '#767577', true: '#9e90cc'}}
            //   onValueChange={() => dispatch(toggleSwitch())}
            />
          </View>
          <View className="my-3 w-full border-[0.2px] border-gray-400" />
          <View className="flex flex-row justify-between items-center mb-3">
            <Text
              className="text-l font-semibold font-psemibold"
              style={{ color: theme.text }}
            >
              FingerPrint
            </Text>
            <Switch
            //   value={isSwitchOn}
              thumbColor="#705cb4"
              trackColor={{ false: "#767577", true: "#9e90cc" }}
            //   onValueChange={() => dispatch(toggleSwitch())}
            />
          </View>
        </View>
      </View>
    );
  };