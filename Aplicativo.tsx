import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Loguin from './src/pages/login/index';
import CriarConta from './src/pages/register/CriarConta';
import Inicial from './src/pages/inicial/Inicial'
import Logo from '../../assets/logo.jpeg';
import CorteseLimpeza from './src/pages/CorteseLimpeza/CorteseLimpeza'
import Localizacao from './src/pages/Localizacao/Localizacao'
import HorariodeFuncionamento from './src/pages/HorariodeFuncionamento/HorariodeFuncionamento'
import Feedback from './src/pages/Feedback/Feedback';

type RootStackParamList = {
  Login: undefined;
  CriarConta: undefined;
  Inicial: undefined;
  CorteseLimpeza: undefined;
  Localização: undefined;
  HoráriodeFuncionamento: undefined;
  Feedback: undefined; 


};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Loguin} options={{ title: 'Login' }} />
          <Stack.Screen name="CriarConta" component={CriarConta} options={{ title: 'Criar Conta' }} />
          <Stack.Screen name="Inicial" component={Inicial} options={{ title: 'Inicial' }} />
          <Stack.Screen name="CorteseLimpeza" component={CorteseLimpeza} options={{ title: 'Cortes e Limpeza de pele' }} />
              <Stack.Screen name="Localização" component={Localizacao} options={{ title: 'Localização' }} />
              <Stack.Screen name="HoráriodeFuncionamento" component={HorariodeFuncionamento} options={{ title: 'Horário de Funcionamento' }} />
              <Stack.Screen name="Feedback" component={Feedback} options={{ title: 'Feedback' }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>




  );


















  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  },

  });
