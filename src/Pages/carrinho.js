import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../Contexts/auth'; // Atualize o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function CarrinhoScreen() {
  const { carrinho } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.volta}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
       <Image source={require('../Images/Seta.png')} style={styles.seta} />
      </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Produtos no Carrinho</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            {/* Use o componente <Image /> sem { uri: ... } */}
            <Image source={item.imagem} style={{ width: 50, height: 50 }} />
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />
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
  volta: {
    marginTop: 50,
    marginLeft: 10,
  },
});
