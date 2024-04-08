import {Calendar, LocaleConfig} from 'react-native-calendars';

const ListCalendar = () => {

  return (
    <Calendar
      onDayPress={ day =>{
        console.log('selected day', day);
      }}
    ></Calendar>
  )
}

export default ListCalendar;