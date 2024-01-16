import { NavigationContainer } from '@react-navigation/native'
import BottomTabMenu from './botton-tabs.routes'

export default function Routes() {
    return(
        <NavigationContainer>
            <BottomTabMenu/>
        </NavigationContainer>
    )
}