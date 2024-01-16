import React, { useCallback } from 'react';
import { Linking, Text, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './ButtonStyle';

interface iProps {
    children: any
    url: string
}

export function Button({ children, url }: iProps) {
    const handlerButton = useCallback(async () => {
        const suported = await Linking.canOpenURL(url)

        if(suported) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Não pode abrir o link: ${url}`)
        }
    }, [url])

    return (
        <Text
            style={styles.button}
            onPress={handlerButton}
        >
            { children }
        </Text>
    );
}