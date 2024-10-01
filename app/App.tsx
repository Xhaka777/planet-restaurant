import { ThemeProvider } from "@/context/ThemeProvider";
import GlobalProvider from "@/context/GlobalProvider"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthLayout from "./(auth)/_layout";
import TabLayout from "./(tabs)/_layout";
import Welcome from "./index";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" component={Welcome} />
            <Stack.Screen name="(auth)" component={AuthLayout} />
            <Stack.Screen name="(tabs)" component={TabLayout} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalProvider>
    </ThemeProvider>

  );
}

export default App;