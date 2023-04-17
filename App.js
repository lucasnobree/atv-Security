import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// *Utilizarabiblioteca@expo/vector-icons0

const App = () => {
  const [senha, setSenha] = useState([]);
  const [inputText, setInputText] = useState('');
  const [esconder, setEsconder] = useState(true);
  const [botao, setBotao] = useState("AVANÇAR");
  const [botao1, setBotao1] = useState(true);
  // *Utilizarocontroledeestadoscomo"useState"
  const TextoInserido = (text) => {
    setInputText(text);
  };

  const apertou = () => {
    setBotao1(!botao1)
    if (botao1 == false) {
      setBotao("AVANÇAR")
    } else if (botao1 == true) {
      setBotao("VOLTAR")
    }
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
      <Ionicons style={styles.botaoRemover} name="remove-circle" size={30} color="red" />
      {/* *Utilizarabiblioteca@expo/vector-icons */}
      <View style={styles.suggestionItemContent}>
        <Text>Senha guardada: </Text>
        <Text style={styles.suggestionItemText}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // *Utilizarosconceitosde"View"
    <View style={styles.topo}>
      {
        botao1
          ?
          <View style={styles.front}>
            <View>
              <Text style={styles.titleFront}>Login's Security</Text>
              {/* *Utilizarosconceitosde"Text" */}
            </View>
            <View style={styles.textFront}>
              <Text style={{ fontSize: 18 }}>Maior segurança para o</Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 100, }}>USUÁRIO</Text>
              <Text>Aperte o botão abaixo para iniciar os testes!</Text>
            </View>
            <Button title={botao} onPress={apertou} color='red' />
            {/* *Utilizarosconceitosde"Button"e"onPress" */}
            <Text style={{ fontSize: 10, color: 'grey', margin: 50, marginTop: 200 }}>
              Algumas funções como, "secureTextEntry" nas senhas já adicionadas,
              e implementação de outro "input" para informar o nome do App ou site cadastrado,
              não foram adicionadas por motivos de falta de ferramentas. Porém,
              estamos dispostos à implementar após esclarecimentos!
            </Text>
          </View>
          :
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.titleText}>Login's Security</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputContainerFilho} >
              {/* *Utilizarosconceitosde"TextInput"e"onChangeText" */}
                <TextInput
                  style={styles.input}
                  onChangeText={TextoInserido}
                  value={inputText}
                  placeholder="Digite a sua senha!"
                  secureTextEntry={esconder}
                />
                {/* *Utilizarosconceitosde"FlatList"e"TouchableComponents"” */}
                <TouchableOpacity style={styles.olho} onPress={() => setEsconder(!esconder)}>
                  <Ionicons name='eye' color="black" size={30} />
                </TouchableOpacity>
              </View>
              <Ionicons name="add-circle" size={40} color="black" onPress={adicionarSenha} style={styles.adicionar} />
            </View>
            {/* Dando um pequeno erro, porém não afetando na funcionabilidade, solução: <NestableDraggableFlatList> : Como não conheço, não usarei. */}
            <ScrollView style={styles.espacoLista}>
            {/* *Utilizarosconceitosde"List"e"ScrollView"” */}
              <FlatList
                data={senha}
                renderItem={listaSenhas}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
            <Button title={botao} onPress={apertou} color='red' style={{}} />
            {/* *Utilizarosconceitosde"Button"e"onPress" */}
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({

  topo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  front: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleFront: {
    backgroundColor: 'red',
    borderRadius: 25,
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginTop: 65,
    marginBottom: 200,
  },
  textFront: {
    alignItems: 'center',
    margin: 20,
  },
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
    height: 60,
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
    // *Criarlayoutsutilizandooflexbox
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