import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';
//import { AuthContext } from '../../../Contexts/auth'; 

export default function finalizarCompra() {
  const navigation = useNavigation();

  const [fonteLoader] = useFonts({
    Oswald_300Light,
  });

  if (!fonteLoader) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>pagina de finalizar compra</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    backgroundColor: '#3498db',
    width: '100%',
    color: '#fff',
    fontFamily: 'Oswald_300Light',
    height: 39,
    paddingTop: 7,
    fontWeight: 'bold'
  },
});
