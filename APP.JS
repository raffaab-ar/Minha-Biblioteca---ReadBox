import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ListaScreen from "./screens/ListaScreen";
import DetalhesScreen from "./screens/DetalheScreen";
import PerfilScreen from "./screens/PerfilScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#f5f5f0" },
          headerTintColor: "#7c6f5b",
          headerTitleStyle: { fontWeight: "700", color: "#2d2d2d" },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Minha Estante", headerShown: false }} />
        <Stack.Screen name="Lista" component={ListaScreen} options={{ title: "Meus Livros" }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: "Detalhes do Livro" }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: "Meu Perfil" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
