import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";

// Permets de connaître la hauteur de la status bar
import Constants from "expo-constants";

export default function App() {
  // console.log(Platform);
  return (
    <View>
      <View style={[styles.container, styles.androidStyle]}>
        <Text style={styles.textTitle}>Interstellar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 24,
  },
  androidStyle: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  header: {
    backgroundColor: "#393939",
  },
  textTitle: {
    color: "white",
    fontSize: 30,
  },
  textInfo: {
    color: "#A1A1A1",
  },
});
