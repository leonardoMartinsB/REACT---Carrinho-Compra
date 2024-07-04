import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function About({ infoAll, voltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Feather
            name="chevron-left"
            color="#fff"
            size={30}
            style={styles.buttonInfo}
          />
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <ScrollView>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={{ uri: infoAll.img }}
          />
          <Text style={styles.textDesc}>
            <Text style={styles.textLabel}>Descrição: </Text>
            {infoAll.descricao}
          </Text>
          <Text style={styles.textDesc}>
            <Text style={styles.textLabel}>Nome:</Text> {infoAll.name}
          </Text>
          <Text style={styles.textDesc}>
            <Text style={styles.textLabel}>Categoria:</Text> {infoAll.categoria}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  textLabel: {
    color: 'red', 
    fontWeight: 'bold', 
    fontSize: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    height: '85%',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  img: {
    width: '100%',
    height: 400,
  },
  textDesc: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 15,
    marginTop: 8,
    fontSize: 14,
  },
});
