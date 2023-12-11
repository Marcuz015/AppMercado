import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [fonteLoader] = useFonts({
    Oswald_300Light
  });
  if (!fonteLoader) {
    return null;
  }

  const navigation = useNavigation();


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem vindo ao nosso mercado</Text>
        <Text style={{ textAlign: 'center', fontFamily: "Oswald_300Light", fontSize: 20, marginBottom: 50 }}>tal do Guiguinho Markets</Text>
        <View style={styles.promocao}>
          <Text style={{fontSize: 17}}>Fique atento na promoção do dia!!</Text>
          <Image source={require('../Images/promoção.jpeg')} style={styles.img} />
        </View>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text style={styles.refris}>
          Refrigerantes em destaque 
        </Text>
        <ScrollView horizontal>
          <TouchableOpacity onPress={() => navigation.navigate("guarana")}>
            <View style={styles.refriContainer}>
              <Image source={require('../Images/guarana.png')} style={styles.refri} />
              <Text style={styles.preco}>R$6,00</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("coca")}>
            <View style={styles.refriContainer}>
              <Image source={require('../Images/cocacola.png')} style={styles.refri} />
              <Text style={styles.preco}>R$7.99</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("pepsi")}>
            <View style={styles.refriContainer}>
              <Image source={require('../Images/pepsi.png')} style={styles.refri} />
              <Text style={styles.preco}>R$6,50</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 360
  },
  titulo: {
    fontSize: 24,
  },
  promocao: {
    borderWidth: 1,
    width: 310,
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  refriContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  refri: {
    width: 200,
    height: 200,
  },
  preco: {
    fontSize: 16,
    backgroundColor: '#3498db',
    width: 90,
    textAlign: 'center',
    borderRadius: 20
  },
  refris: {
    textAlign: 'center',
    fontFamily: "Oswald_300Light",
    fontSize: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
  }
});
