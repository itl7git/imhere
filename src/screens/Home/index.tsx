import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';


export function Home() {
  function handleParticipantAdd() {
    console.log("handleParticipantAdd");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022.
      </Text>

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
  )
}