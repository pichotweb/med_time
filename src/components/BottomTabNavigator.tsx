import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from '../pages/HomePage';
import NewPage from '../pages/NewPage';
import SchedulePage from '../pages/SchedulePage';
import TimelinePage from '../pages/TimelinePage';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FloatingButton from './FloatingButton';

const BottomTabNavigator = () => {

  let Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator
    screenOptions={ ({route}) => ({
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'cyan'
      },
      tabBarIcon: ( {focused, color, size} ) => {
        let iconName: string;

        switch (route.name) {
          case 'Home':
            iconName = 'home'
            break;
          case 'List':
            iconName = 'list-ol'
            break;
          case 'Schedule':
            iconName = 'book'
            break;
          default:
            iconName = 'home'
        }

        return <Icon name={iconName} size={30} color="#000" />
      },  
      
    })}>
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen
      name="New"
      component={NewPage}
      options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <Icon
            name='plus'
            size={30}
            color='white'
          ></Icon>
        ),
        tabBarButton: (props) => <FloatingButton {...props}></FloatingButton>
      }} />
    <Tab.Screen name="Schedule" component={SchedulePage} />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
});

export default BottomTabNavigator