import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles';

import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState(['Joao']);

  function handleParticipantAdd() {
    if (participants.includes('Italo')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }

    setParticipants(prevState => [...prevState, 'Jean']);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover participante ${name}?`, [
      { text: 'Sim', onPress: () => Alert.alert('Deletado') },
      { text: 'Não', style: 'cancel' },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes na sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}