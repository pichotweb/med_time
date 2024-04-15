import { Button } from "@rneui/base";
import { useState } from "react";
import { DatePickerIOSComponent } from "react-native";
import { DatePickerIOSBase } from "react-native";
import { Text, TextInput, View } from "react-native"

const Form = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState(Date.now());
  const [durationTime, setDurationTime] = useState(0);

  function handleNumberInput(text : string) {
    let parsedInt = parseInt(text, 10);
    setDurationTime( isNaN(parsedInt) ? 0 : parsedInt );
  }

  function sendForm() {
    console.log('name', name);
    console.log('type', type);
    console.log('startDate', startDate);
    console.log('durationTime', durationTime);
  }

  return(
    <View>
      <Text> Novo medicamento </Text>
      <View>
        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Tipo"
          value={type}
          onChangeText={setType}
        />

        <TextInput
          placeholder="Duration"
          keyboardType="numeric"
          value={ durationTime.toString() }
          onChangeText={ (duration) => handleNumberInput(duration) }
        />

        <Text>
          Selected: test
        </Text>

        <Button onPress={sendForm}>
          Enviar
        </Button>
      </View>
    </View>
  )
}

export default Form;