import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigation, HomeNavigation } from "./src/navigation";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";
import { GetItem } from "./src/helpers/storage";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";

const Stack = createStackNavigator();

function App() {
  const { state, signin } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const JSONString = await GetItem("user");
        var JSONObject = JSON.parse(JSONString);
        console.log(JSONObject);
        if (JSONObject !== null) {
          signin({ email: JSONObject.email, password: JSONObject.password });
        }
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      // dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
      setLoading(false);
    }, 1000);
  }, []);
  if (loading === false) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {state.email === null ? (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Auth"
                  component={AuthNavigation}
                />
              </>
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeNavigation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "#181818",
        }}
      >
        <Text style={{ color: "#F2F2F2", fontSize: "30" }}>Loading...</Text>
      </SafeAreaView>
    );
  }
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
