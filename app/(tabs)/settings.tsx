import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useTheme } from '@/context/ThemeProvider'

const Setting = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      className='h-full'
      style={{ backgroundColor: theme.background }}
    >
      <ScrollView>
        <View className='flex mt-12 p-4'>
          <Text className='text-2xl font-semibold mt-2 font-psemibold'
            style={{ color: theme.text }}>
            Settings
          </Text>
          <View className='justify-center items-center pt-10'>
            <SettingCard />
          </View>
          <View className='flex-1 justify-end pt-2'>
            <CustomButton
              title="Log out"
              handlePress={() => ""}
              containerStyles="mt-7"
              isLoading={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting