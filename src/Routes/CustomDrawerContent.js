// CustomDrawerContent.js
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from '../Contexts/auth';

const CustomDrawerContent = (props) => {
  const { nome, user } = useContext(AuthContext);

  const navigateToLogin = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>{user.nome}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <TouchableOpacity onPress={navigateToLogin} style={styles.button}>
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('HomeScreen')} />
      <DrawerItem label="Perfil" onPress={() => props.navigation.navigate('PerfilScreen')} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfoText: {
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
});

export default CustomDrawerContent;
