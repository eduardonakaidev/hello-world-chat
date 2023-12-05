import { NavigationContainer } from "@react-navigation/native";
import { AppRoute } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const isAuth = true;
export function Routes(){
    return(
        <NavigationContainer>
            {isAuth ? <AppRoute/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}