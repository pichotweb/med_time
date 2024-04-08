import { useState } from "react";
import { Text } from "react-native"

const Form = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState(Date.now());
  const [durationTime, setDurationTime] = useState(0);

  return(
    <Text> This will be the form!</Text>
  )
}

export default Form;