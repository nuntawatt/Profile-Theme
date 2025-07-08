// app/_layout.js
import { Stack } from "expo-router";
import { ThemeProvider } from "./context/ThemeContext";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false, 
            title: "Profile"
          }} 
        />
        <Stack.Screen 
          name="about" 
          options={{ 
            headerShown: false, 
            title: "About Us"
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}