import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import {AuthContext} from '../Contexts/auth'

export default function LoginScreen() {
 const [nome, setnome] = useState('');
 const [email, setEmail] = useState('');

 const {signIn} = useContext(AuthContext);

 function handleLogin(){
  signIn(email, nome)
 }

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Seja bem vindo(a)!</Text>

     <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setnome(text)}
        placeholder="Digite seu nome"
     />

     <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
     />
     <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Acessar</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 14,
    fontSize: 20,
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#3498db',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})