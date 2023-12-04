import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Welcome } from '../screen/Welcome';
import { LogIn } from '../screen/Log-in';
import { SignUp } from '../screen/Sign-up';


const {Navigator,Screen} = createNativeStackNavigator();
export function AuthRoutes(){
    return(
    <Navigator initialRouteName='welcome' screenOptions={{headerShown: false}}>
        <Screen name='welcome' component={Welcome}/>
        <Screen name='login' component={LogIn}/>
        <Screen name='signup' component={SignUp}/>
    </Navigator>
    )
}