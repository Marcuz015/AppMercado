// Routes.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Pages/HomeScreen';
import PerfilScreen from '../Pages/PerfilScreen';
import LoginScreen from '../Pages/LoginScreen';
import guarana from '../Pages/Produtos/guarana';
import limao from '../Pages/Produtos/limao';
import laranja from '../Pages/Produtos/laranja';
import carrinho from '../Pages/carrinho'


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
          <Drawer.Screen name="carrinho" component={carrinho}/>
          <Drawer.Screen name="guarana" component={guarana}  options={{ headerShown: false }}/>
          <Drawer.Screen name="limao" component={limao}  options={{ headerShown: false }}/>
          <Drawer.Screen name="laranja" component={laranja}  options={{ headerShown: false }}/>

        </Drawer.Navigator>
  );
};

export default Routes;
