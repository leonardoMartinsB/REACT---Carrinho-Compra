import React, { useState } from 'react';
import {View, Text, TextInput, Pressable, StyleSheet, Alert, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#588157',
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '500',
  },
  input: {
    width: '95%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  botao: {
    marginTop: 30,
    backgroundColor: 'white',
    width: '70%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
  },
});

const users = [
  { username: 'Leo', password: '123' },
  { username: 'Pedro', password: '123' },
  { username: 'Emerson', password: 'pam' },
  { username: 'Alex', password: 'pam' },
  { username: 'a', password: 'a' },
];

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      Alert.alert('Craque Collection', `Bem-Vindo, ${user.username}!`);
      navigation.navigate('Home');
    } else {
      Alert.alert('Craque Collection', 'Nome ou Senha inválidos');
    }
  };

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Maior loja de Camisas de Time!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.botao} onPress={handleLogin}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    );
}


