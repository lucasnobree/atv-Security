import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; //Conceito de biblioteca vector (0,5 pontos)
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [site, setSite] = useState(''); //Conceito useState (1,0 ponto)
  const [senha, setSenha] = useState('');
  const [esconder, setEsconder] = useState(true);

  const [botao1, setBotao1] = useState(true);
  const [texto, setTexto] = useState("ADICIONAR LOGIN");

  const apertou = () => {
    setBotao1(!botao1);


    if (botao1 == false) {
      setTexto("ADICIONAR LOGIN")
    } else if (botao1 == true) {
      setTexto("ESCONDER LOGIN")
    }
  };

  return (
    //Conceito de View (0,5 pontos)
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <View>
        <Text style={styles.login}>Login's Security</Text>
      </View>
      <View style={styles.alinhar}>
        <View style={styles.box}>
          <MaterialIcons name="email" size={20} color="black" style={styles.icon}/>
          <TextInput
            style={styles.input}
            placeholder="Enter site name"
            placeholderTextColor={'#d3d3d3'}
            onChangeText={(textoDigitado) => setSite(textoDigitado)}
          />
          <View style={styles.olho}>
          </View>
        </View>
        <View style={styles.box}>
          <Ionicons name="ios-key" size={20} color="black" style={styles.icon}/>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={'#d3d3d3'}
            onChangeText={(senhaDigitada) => setSenha(senhaDigitada)}
            secureTextEntry={esconder}
           />
          <TouchableOpacity style={styles.olho} onPress={ () => setEsconder(!esconder)}>
            <Ionicons name='eye' color="black" size={25}/>
          </TouchableOpacity>
        </View>
        <View>
          <Button title={texto} onPress={apertou} color='red'/>
        </View>
      </View>
      <View>
        {
          botao1 ? null : <Text> Site cadastrado: {site} e senha: {senha}</Text>
        }
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    fontSize: 38,
    marginBottom: 25,
  },

  box: {
    flexDirection: 'row',
    width: '75%',
    borderColor: '#777',
    borderRadius: 12,
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
  },

  icon: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },

  olho: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },

  input: {
    width: '75%',
    height: 50,
    color: 'black',
    fontSize: 16,
  },

  alinhar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
