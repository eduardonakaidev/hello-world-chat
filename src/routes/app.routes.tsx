import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { ContactList } from "../screen/Contact-list";

const {Navigator,Screen} = createNativeStackNavigator();

export function AppRoute(){
    return(
        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="contactlist" component={ContactList}/>
        </Navigator>
    )
}