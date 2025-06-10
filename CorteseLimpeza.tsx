
import React from "react";
import { Text, View, TouchableOpacity, Linking, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { style } from "./styles";



type RootStackParamList = {
    inicial: undefined;
    Localização: undefined;
    HoráriodeFuncionamento: undefined;
    Feedback: undefined;
};

  
export default function CorteseLimpeza() {

   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  return (
    <View style={style.container}>
      <Text>Welcome to Cortes e Limpeza!</Text>
    </View>
 



);
}
    
