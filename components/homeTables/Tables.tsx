import React, { useRef, useState } from "react";
import { Animated, Dimensions, FlatList } from "react-native";
import { CARD_HEIGHT } from "./Cards"
import TableCard from "./TableCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const useLazyRef = <T extends object>(initializer: () => T) => {
    const ref = useRef<T>();
    if (ref.current === undefined) {
        ref.current = initializer();
    }
    return ref.current;
}

const { height } = Dimensions.get("window")
const MARGIN = 16;
const HEIGHT = CARD_HEIGHT + MARGIN * 2;

const cards = [
    {
        id: "1",
        title: "Tavolina 1",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-red-500",
    },
    {
        id: "2",
        title: "Tavolina 2",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-green-500",
    },
    {
        id: "3",
        title: "Tavolina 3",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-green-500",
    },
    {
        id: "4",
        title: "Tavolina 4",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-red-500",
    },
    {
        id: "5",
        title: "Tavolina 5",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-green-500",
    },
    {
        id: "6",
        title: "Tavolina 6",
        avatar: "https://via.placeholder.com/300",
        containerStyles: "bg-red-500",
    },
    // Add more items as needed
];


const Table = ({ onCardPress }) => {
    const y = useLazyRef(() => new Animated.Value(0));
    const onScroll = useLazyRef(() =>
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: { y },
                    }
                }
            ],
            { useNativeDriver: true }
        )
    )

    return (
        <AnimatedFlatList
            scrollEventThrottle={16}
            bounces={false}
            {...{ onScroll }}
            data={cards}
            renderItem={({ item, index }) => (
                <TableCard
                    id={item.id}
                    title={item.title}
                    avatar={item.avatar}
                    containerStyles={item.containerStyles}
                    y={y}
                    index={index}
                    onCardPress={onCardPress}
                />
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

export default Table;