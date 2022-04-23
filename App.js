import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'

import { Routes } from './src/routes';

export default function App() {

  const [fontsValided] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if (!fontsValided) return <AppLoading />

  return (
    <Routes />
  );
};