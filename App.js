import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [senha, setSenha] = useState([]);
  const [inputText, setInputText] = useState('');
  const [esconder, setEsconder] = useState(true);

  const TextoInserido = (text) => {
    setInputText(text);
  };

  const adicionarSenha = () => {
    if (inputText !== '') {
      setSenha([
        ...senha,
        { id: new Date().getTime().toString(), content: inputText },
      ]);
      setInputText('');
    }
  };

  const removerSenha = (id) => {
    setSenha(senha.filter((suggestion) => suggestion.id !== id));
  };

  const listaSenhas = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => removerSenha(item.id)}>
      <Ionicons style={styles.botaoRemover}name="remove-circle" size={30} color="red" />
      <View style={styles.suggestionItemContent}>
        <Text>Senha guardada: </Text>
        <Text style={styles.suggestionItemText}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login's Security</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputContainerFilho} >
          <TextInput
            style={styles.input}
            onChangeText={TextoInserido}
            value={inputText}
            placeholder="Digite a sua senha!"
            secureTextEntry={esconder}
          />
          <TouchableOpacity style={styles.olho} onPress={() => setEsconder(!esconder)}>
            <Ionicons name='eye' color="black" size={25} />
          </TouchableOpacity>
        </View>
        <Ionicons name="add-circle" size={40} color="black" onPress={adicionarSenha} style={styles.adicionar} />
      </View>
      <ScrollView style={styles.espacoLista}>
        <FlatList
          data={senha}
          renderItem={listaSenhas}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: 'red',
    borderRadius: 25,
    color: 'white',
    fontSize: 30,
    padding: 10,
    margin: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  olho: {
    paddingRight: 10,
  },
  adicionar: {
    paddingLeft: 8,
    height: 58,
  },
  inputContainerFilho: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: '#777',
    borderRadius: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
    color: 'black'
  },
  espacoLista: {
    paddingTop: 5,
    flex: 1,
    borderColor: '#777',
    borderRadius: 12,
    borderWidth: 2,
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 8,
    marginBottom: 8,
  },
  botaoRemover: {
    marginLeft: 10,
  },
  suggestionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  suggestionItemText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default App;