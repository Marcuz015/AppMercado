import React, { createContext, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const navigation = useNavigation();

  function signIn(email, nome) {
    if (email !== '' && nome !== '') {
      setUser({
        email: email,
        nome: nome,
      });

      navigation.navigate('HomeScreen');
    }
  }

  function adicionarProduto(imagem, nome, preco) {
    setCarrinho((prevCarrinho) => [
      ...prevCarrinho,
      {
        nome: nome,
        imagem: imagem,
        preco: preco,
      },
    ]);
  }

  const removerDoCarrinho = (index) => {
    setCarrinho((prevCarrinho) => {
      const novoCarrinho = [...prevCarrinho];
      novoCarrinho.splice(index, 1);
      return novoCarrinho;
    });
  };

  return (
    <AuthContext.Provider value={{ signIn, user, carrinho, adicionarProduto, removerDoCarrinho }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
