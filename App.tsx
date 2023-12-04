import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import { Routes } from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (



    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#F5F5F5"    
        />
        <Routes />
    </ThemeProvider>

  );
}

