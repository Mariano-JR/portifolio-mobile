import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './SkillStyle';
import { StarRating } from '../StarRating';

interface iSkillProps {
    id: number
    name: string
    skill: number
}

export function Skill({ id , name , skill }: iSkillProps) {
  return (
    <View
        key={id}
        style={styles.skill}
    >
        <Text>
            {name}
        </Text>
        <StarRating
            level={skill}
        />
    </View>
  );
}