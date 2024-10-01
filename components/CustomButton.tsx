import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string;
    handlePress?: () => any;
    containerStyles: string;
    isLoading: boolean;
}

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    isLoading
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""
                }`}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg`}>
                {title}
            </Text>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    )
}

export default CustomButton;