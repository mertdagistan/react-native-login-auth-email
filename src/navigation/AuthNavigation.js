
import { createStackNavigator } from "@react-navigation/stack";
import Signin from '../screens/Auth/Signin'

const AuthStack = createStackNavigator();


export default function AuthNavigation() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={Signin}
        />
      </AuthStack.Navigator>
    );
  }