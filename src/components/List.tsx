import {Calendar, LocaleConfig} from 'react-native-calendars';

const List = () => {

  return (
    <Calendar
      onDayPress={ day =>{
        console.log('selected day', day);
      }}
    ></Calendar>
  )
}

export default List;