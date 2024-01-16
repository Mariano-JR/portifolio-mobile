import React from 'react';
import { View } from 'react-native';

import { styles } from './SkillScreenStyle';
import { Profile } from '../../components/Profile';
import { SkillContainer } from '../../components/SkillContainer';

export function SkillScreen() {
  return (
    <View style={styles.container}>
      <Profile/>
      <SkillContainer/>
    </View>
  );
}