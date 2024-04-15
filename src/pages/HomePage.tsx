import { ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, DebugInstructions, Header, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Section from "../components/Section";
import { useTheme } from "react-native-paper";


const HomePage = () => {

  const theme = useTheme();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>

      <Header />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits. xpto. wow we got a hot reload!
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>

        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>

        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>

        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </View>
    </ScrollView>
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
  },
});

export default HomePage;