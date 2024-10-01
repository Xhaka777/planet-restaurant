import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { icons } from '@/constants'
import Home from './home'
import Setting from './settings'
import { useTheme } from '@/context/ThemeProvider'

const Tab = createBottomTabNavigator()

interface TabIconProps {
    icon: any;
    color: string;
    name: string;
    focused: any;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
    return (
        <View className='flex items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabLayout = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#705cb4',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: theme.background,
                        borderTopWidth: 1,
                        height: 84,
                    }
                }}
            >
                <Tab.Screen
                    name='home'
                    component={Home}
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="settings"
                    component={Setting}
                    options={{
                        title: "Settings",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.setting}
                                color={color}
                                name="Setting"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default TabLayout;