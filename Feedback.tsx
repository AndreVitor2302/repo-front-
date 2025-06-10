
import React from "react";
import { Text, View, TouchableOpacity, Linking, Image , StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { style } from "./styles";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



type RootStackParamList = {
    inicial: undefined;
    Localização: undefined;
    HoráriodeFuncionamento: undefined;
    Feedback: undefined;
};

  
export default function Feedback() {

   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  return (
    <View style={style.container}>
      <Text>Welcome to Cortes e Limpeza!</Text>
    </View>
 



);
}
    
