import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';

import { AuthContext } from '../../Contexts/auth';

export default function Guarana() {
  const { preco, imagem, nome } = useContext(AuthContext); // Removi 'nome' pois não estava sendo usado

  const navigation = useNavigation();
  const [fonteLoader] = useFonts({
    Oswald_300Light,
  });

  if (!fonteLoader) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.volta}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../../Images/Seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Refrigerante Guaraná</Text>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../Images/guarana.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.descricao}>Refrigerante Guaraná Água da Serra</Text>
        <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 20 }}>R$6,00</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btnCompra}>
          <Text style={styles.txtComprar}>Comprar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seta: {
    width: 30,
    height: 30,
  },
  volta: {
    marginTop: 50,
    marginLeft: 10,
  },
  img: {
    width: 400,
    height: 400,
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
    paddingTop: 7, // Adicionado para ajustar o espaçamento no topo
  },
  descricao: {
    fontSize: 20,
    textAlign: 'center',
  },
  txtComprar: {
    fontSize: 25,
    color: '#fff',
  },
  btnCompra: {
    backgroundColor: '#3498db',
    width: '80%',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20, // Adicionado para ajustar o espaçamento no topo
  },
});
