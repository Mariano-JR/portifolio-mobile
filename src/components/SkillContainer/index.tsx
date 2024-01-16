import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import frontendSkills from '../../json/frontend-skills.json'
import backendSkills from '../../json/backend-skills.json'
import databaseSkills from '../../json/database-skills.json'

import { styles } from './SkillContainerStyle';
import { Skill } from '../Skill';

export function SkillContainer() {

    return (
        <View style={styles.container}>
            <View
                key={1}
            >
                <Text
                    style={styles.title}
                    >
                    Front-End
                </Text>
                <ScrollView>
                    {frontendSkills.map(skill => {
                        return(
                            <Skill
                                id={skill.id}
                                name={skill.name}
                                skill={skill.skill}
                            />
                        )
                    })}
                </ScrollView>
            </View>
            <View
                key={2}
            >
                <Text
                    style={styles.title}
                >
                    Back-End
                </Text>
                <ScrollView>
                    {backendSkills.map(skill => {
                        return(
                            <Skill
                                id={skill.id}
                                name={skill.name}
                                skill={skill.skill}
                            />
                        )
                    })}
                </ScrollView>
            </View>
            <View
                key={3}
            >
                <Text
                    style={styles.title}
                >
                    Data Base
                </Text>
                <ScrollView>
                    {databaseSkills.map(skill => {
                        return(
                            <Skill
                                id={skill.id}
                                name={skill.name}
                                skill={skill.skill}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        </View>
  );
}