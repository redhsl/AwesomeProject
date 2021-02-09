import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/pages/Home";
import DetailsScreen from "./src/pages/Detail";
import ForgetScreen from "./src/pages/Forget";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{title:'登录',headerTitleAlign:'center'}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{title:'主页',headerTitleAlign:'center'}} name="Details" component={DetailsScreen} />
                <Stack.Screen options={{title:'忘记密码',headerTitleAlign:'center'}} name="Forget" component={ForgetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
