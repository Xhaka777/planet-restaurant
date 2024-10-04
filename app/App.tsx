import { ThemeProvider } from "@/context/ThemeProvider";
import GlobalProvider from "@/context/GlobalProvider"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import initializeDatabase from "@/database/db";
import React from "react";
import AuthLayout from "./(auth)/_layout";
import TabLayout from "./(tabs)/_layout";
import Welcome from "./index";
import DetailsLayout from "./(table-details)/_layout";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <SQLiteProvider databaseName="planet.db" onInit={initializeDatabase}>
        <GlobalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" component={Welcome} />
              <Stack.Screen name="(auth)" component={AuthLayout} />
              <Stack.Screen name="(tabs)" component={TabLayout} />
              <Stack.Screen name="(table-details)" component={DetailsLayout} />
            </Stack.Navigator>
          </NavigationContainer>
        </GlobalProvider>
      </SQLiteProvider>
    </ThemeProvider>

  );
}

export default App;