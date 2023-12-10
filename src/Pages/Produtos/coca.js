import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../Contexts/auth';

export default function coca() {

const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.volta}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image source={require('../../Images/Seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  seta:{
    width: 30,
    height: 30,
  },
  volta:{
    marginTop:50,
    marginLeft: 10,
  }
});
