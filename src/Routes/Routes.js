// Routes.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Pages/HomeScreen';
import PerfilScreen from '../Pages/PerfilScreen';
import LoginScreen from '../Pages/LoginScreen';
import carrinho from '../Pages/carrinho'
import pepsi from '../Pages/Produtos/refri/pepsi'
import Guarana from '../Pages/Produtos/refri/guarana';
import coca from '../Pages/Produtos/refri/coca';



const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
  
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
              width: 250,
            },
            headerTitle: 'ㅤ',
          }}
        >
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="PerfilScreen" component={PerfilScreen} />
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="carrinho" component={carrinho} options={{ headerShown: false }}/>
          <Drawer.Screen name="guarana" component={Guarana}  options={{ headerShown: false }}/>
          <Drawer.Screen name="coca" component={coca}  options={{ headerShown: false }}/>
          <Drawer.Screen name="pepsi" component={pepsi}  options={{ headerShown: false }}/>
        </Drawer.Navigator>
  );
};

export default Routes;
