import React from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import Cards, { CARD_HEIGHT as DEFAULT_CARD_HEIGHT } from "./Cards";

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const { height: wHeight } = Dimensions.get("window")
const height = wHeight - 64;

interface TableCardProps {
    y: Animated.Value;
    index: number;
    id: string;
    title: string;
    avatar: string;
    containerStyles: string;
    onCardPress: (id: string) => void;
}

const TableCard = ({
    id,
    title,
    avatar,
    containerStyles,
    y,
    index,
    onCardPress
}: TableCardProps) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDissapearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    const isAppearing = height;
    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: "clamp",
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 4],
            extrapolate: "clamp",
        })
    )
    const scale = position.interpolate({
        inputRange: [isDissapearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    });
    const opacity = position.interpolate({
        inputRange: [isDissapearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
    });

    return (
        <TouchableOpacity>
            <Animated.View
                style={[
                    styles.card,
                    { opacity, transform: [{ translateY }, { scale }] }
                ]}
            >
                <Cards
                    id={id}
                    title={title}
                    avatar={avatar}
                    containerStyles={containerStyles}
                    onCardPress={onCardPress}
                />
            </Animated.View>
        </TouchableOpacity>
    )
}

export default TableCard;

const styles = StyleSheet.create({
    card: {
        marginVertical: MARGIN,
        alignSelf: 'center'
    }
})