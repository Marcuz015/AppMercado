import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const navigation = useNavigation();

  function singIn(email, nome) {
    if (email !== '' && nome !== '') {
      setUser({
        email: email,
        nome: nome,
      });

      navigation.navigate('HomeScreen');
    }
  }

  function produto(imagem, nome, preco) {
    setCarrinho((prevCarrinho) => [
      ...prevCarrinho,
      {
        nome: nome,
        imagem: imagem,
        preco: preco,
      },
    ]);
  }

  return (
    <AuthContext.Provider value={{ singIn, user, carrinho, produto }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
