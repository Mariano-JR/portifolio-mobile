import React from 'react';
import { Image, View, Text } from 'react-native';
import profileImg from '../../../assets/profile-pic.png'

import { styles } from './ProfileImgStyle';

export function Profile() {
  return (
    <View style={styles.container}>
        <View style={styles.shadow}>
            <Image
                style={styles.img}
                source={profileImg}
                />
        </View>
        <Text
          style={styles.text}
        >
          Mariano Júnior       
        </Text>
        <Text>
          Desenvolvedor Full Stack
        </Text>
    </View>
  );
}