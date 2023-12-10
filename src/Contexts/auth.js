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

  function adicionarAoCarrinho(preco, nome, imagem) {
    const item = {
      preco: preco,
      nome: nome,
      imagem: imagem,
    };

    // Adiciona o item ao carrinho
    setCarrinho((prevCarrinho) => [...prevCarrinho, item]);
  }

  function limparCarrinho() {
    // Limpa o carrinho
    setCarrinho([]);
  }

  return (
    <AuthContext.Provider value={{ singIn, user, carrinho, adicionarAoCarrinho, limparCarrinho }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
