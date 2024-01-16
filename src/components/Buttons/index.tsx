import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import socials from '../../json/socials.json'
import { styles } from './ButtonsStyle';
import { Button } from '../Button';

export function Buttons() {
  return (
    <View style={styles.container}>
        {socials.map(social => {
            return <Button
                        key={social.id}
                        url={social.url}
                    >
                        <AntDesign name={social.icon} size={20}/> {social.name}
                    </Button>
        })}
    </View>
  );
}