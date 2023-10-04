import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {RecipeList} from "../Screens/RecipeList"
import {WelcomeScreen} from "../Screens/WelcomeScreen"

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{animation:"none", animationDuration:500}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="RecipeList" component={RecipeList}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator