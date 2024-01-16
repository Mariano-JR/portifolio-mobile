import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SkillScreen } from "../screens/SkillScreen";
import { AntDesign } from '@expo/vector-icons'

const { Navigator , Screen, Group } = createBottomTabNavigator()
const TopNavigator = createMaterialTopTabNavigator()

export default function BottomTabMenu() {
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Home: 'home',
                        Skills: 'barschart'
                    }

                    return (
                        <AntDesign
                            name={icons[route.name]}
                            color={color}
                            size={size}
                        />
                    )
                },
                tabBarActiveTintColor: '#FFF',
                tabBarActiveBackgroundColor: '#04B3C8',
                tabBarInactiveTintColor: '#04B3C8'
            })}
        >
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="Skills"
                component={SkillScreen}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}