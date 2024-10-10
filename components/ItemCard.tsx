import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useTheme } from '@/context/ThemeProvider'
import { images } from '@/constants'
import { addCartItem, useCartDispatch } from '@/store';
import BaseButton from './BaseButton';
import { Item } from '@/types/Stock';

// interface ItemCardProps {
//     image: string;
//     name: string;
//     price: string;
// }
interface ItemCardProps {
    item: Item
}

const ItemCard = ({ item }: ItemCardProps) => {
    const { theme } = useTheme();
    const cartDispatch = useCartDispatch();

    return (
        <View className='flex flex-row w-full h-40 justify-between'>
            <TouchableOpacity className='px-4'>
                {item.image ? (
                    <Image src={item.image} className='w-40 h-40' resizeMode='contain' />
                ) : (
                    <View className='w-40 h-40 flex items-center justify-center bg-gray-200'>
                        <Text>No Image Available</Text>
                    </View>
                )}
            </TouchableOpacity>
            <View className='flex flex-1 justify-center px-4'>
                <Text className='text-center mb-2 font-psemibold text-lg'>{item.name}</Text>
                <View className='flex flex-row justify-evenly items-center'>
                    <View className='bg-red-400 p-2 rounded-xl'>
                        <Text style={{ color: theme.text }}>{item.price}</Text>
                    </View>
                    <Feather name='plus-square' size={24} color='#705cb4' />
                    <BaseButton
                        testID={`add-${item.id}`}
                        onClick={() => cartDispatch(addCartItem(item))}
                        title={'Add to Cart'}
                    />
                </View>
            </View>
        </View>
    )
}

export default ItemCard;