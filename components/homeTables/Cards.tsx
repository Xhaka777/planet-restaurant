import React from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { useTheme } from "@/context/ThemeProvider";

const { width } = Dimensions.get("window")
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = CARD_WIDTH * ratio * 0.4;

interface CardProps {
    id: string;
    title: string;
    avatar: string;
    containerStyles: string;
    onCardPress: (id: string) => void;
}

const Cards = ({
    id,
    title,
    avatar,
    containerStyles,
    onCardPress
}: CardProps) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            style={styles.card}
            className="flex flex-col justify-center items-center"
            onPress={() => onCardPress(id)}
        >
            <View
                className="flex flex-row flex-1 w-full rounded-lg border-2 p-0.5"
                style={{
                    backgroundColor: theme.secBorder,
                    borderColor: theme.border,
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOffset: { height: 6, width: 0 },
                    shadowOpacity: 0.15
                }}
            >
                <View className="flex-1 justify-center ml-3 gap-y-1">
                    <Text
                        className="font-psemibold text-sm"
                        style={{ color: theme.text }}
                    >
                        {title}
                    </Text>
                </View>
                <View
                    className={`flex w-[100px] justify-center rounded-r-lg ${containerStyles}`}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Cards;

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})