import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeScreenStyle';
import { Buttons } from '../../components/Buttons';
import { Profile } from '../../components/Profile';

export function HomeScreen() {
  return (
    <View style={styles.container}>
        <Profile/>
        <Buttons/>
    </View>
  );
}