// Routes.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Pages/HomeScreen';
import PerfilScreen from '../Pages/PerfilScreen';
import LoginScreen from '../Pages/LoginScreen';

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
        </Drawer.Navigator>
  );
};

export default Routes;
