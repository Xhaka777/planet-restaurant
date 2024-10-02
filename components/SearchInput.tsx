import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/context/ThemeProvider'
import { icons } from '@/constants'

const SearchInput = () => {
    const initialQuery = "";

    const [query, setQuery] = useState(initialQuery || "");
    const { theme, toggleTheme } = useTheme();

    return (
        <View className='w-full h-16 px-4 rounded-2xl border-2 focus:border-secondary flex flex-row items-center'
            style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.border
            }}
        >
            <TextInput
                className='text-base mt-0.5 flex-1 font-pregular'
                style={{ color: theme.text }}
                value={query}
                placeholder='Kerko'
                placeholderTextColor={theme.text}
                onChangeText={(e) => setQuery(e)}
            />
            <TouchableOpacity
                onPress={() => {
                    if (query === "")
                        return Alert.alert(
                            "Missing Query",
                            "Pleae input something to search results across database"
                        )
                }}
            >
                <Image
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput