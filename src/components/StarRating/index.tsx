import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface iStarRatingProps {
    level: number
}

export const StarRating = ({ level }: iStarRatingProps) => {
    const skillLevel = Array.from({ length: 5}, (_, index) => (
        <AntDesign
            key={index}
            name={index < level ? 'star' : 'staro'}
            size={18}
            color='#04B3C8'
        />
    ))

    return <View style={{ flexDirection: 'row' }}>{ skillLevel }</View>
}