import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles';

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Italo', 'Jean', 'Flavia', 'Aylton', 'Ana', 'Mar', 'Gill', 'Adam', 'Barry', 'Chris'];

  function handleParticipantAdd() {
    console.log("Estou adicionando um participante");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Estou removendo um participante ${name}`);
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