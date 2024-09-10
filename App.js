import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Platform,
} from "react-native";

// Permets de connaître la hauteur de la status bar
import Constants from "expo-constants";
// Icones
import Ionicons from "@expo/vector-icons/Ionicons";
// Mes images
import logo from "./assets/logo-imdb.png";
import moviePoster from "./assets/film.jpg";
import one from "./assets/matthew.jpg";
import two from "./assets/anne.jpg";
import three from "./assets/jessica.jpg";

export default function App() {
  // console.log(Platform);
  return (
    <ScrollView>
      <View style={[styles.container, styles.androidStyle]}>
        {/* header */}
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        {/* movie section */}
        <Text style={styles.textTitle}>Interstellar</Text>
        <Text style={[styles.textInfo, styles.subheader]}>
          2014 PG-13 2h49min Adventure, Drama, Sci-Fi
        </Text>
        <View style={styles.row}>
          <Image
            source={moviePoster}
            style={{ height: 150, width: 130 }}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={styles.textDescription}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <Pressable style={styles.watchLaterButton}>
              <Text style={styles.textDescription}>+ ADD TO WATCHLIST</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.row, { flex: 1, paddingTop: 30 }]}>
          <View style={styles.centered}>
            <Ionicons name="star" size={35} color="gold"></Ionicons>

            <Text style={styles.textDescription}>8.6/10</Text>
            <Text style={styles.textInfo}>1.1M</Text>
          </View>
          <View style={styles.centered}>
            <Ionicons name="star-outline" size={35} color="white"></Ionicons>
            <Text style={styles.textDescription}>RATE THIS</Text>
          </View>
          <View style={styles.centered}>
            <Text style={styles.metascore}>74</Text>
            <Text style={styles.textDescription}>Metascore</Text>
            <Text style={styles.textInfo}>46 critics reviews</Text>
          </View>
        </View>
        {/* Actors */}
        <View>
          <View style={styles.row}>
            <Text style={styles.textTitle}>Top Billed Cast</Text>
            <Text>SEE ALL</Text>
          </View>
          {/* -- Carousel -- */}
          <ScrollView horizontal={true} style={{ flex: 1 }}>
            <View style={styles.actorInfo}>
              <Image source={one} resizeMode="fit" />
              <Text style={styles.textDescription}>Matthew McConaughey</Text>
              <Text style={styles.textInfo}>Cooper</Text>
            </View>
            <View style={styles.actorInfo}>
              <Image source={two} resizeMode="fit" />
              <Text style={styles.textDescription}>Anne Hathaway</Text>
              <Text style={styles.textInfo}>Brand</Text>
            </View>
            <View style={styles.actorInfo}>
              <Image source={three} resizeMode="fit" />
              <Text style={styles.textDescription}>Jessica Chastain</Text>
              <Text style={styles.textInfo}>Murph</Text>
            </View>
          </ScrollView>
          {/* -- bottom info -- */}
          <Text style={styles.textDescription}>Director</Text>
          <Text style={styles.textInfo}>Christopher Nolan</Text>
          <Text style={styles.textDescription}>Writers</Text>
          <Text style={styles.textInfo}>
            Johnathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#191919",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 24,
  },
  androidStyle: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },

  row: {
    flexDirection: "row",
  },

  logo: {
    height: 50,
    width: 80,
  },
  header: {
    backgroundColor: "#393939",
    height: 60,
    justifyContent: "center",
  },

  textTitle: {
    color: "white",
    fontSize: 30,
    paddingTop: 16,
  },

  subheader: {
    paddingVertical: 30,
  },

  textInfo: {
    color: "#888888",
  },
  textDescription: {
    color: "white",
    lineHeight: 25,
  },
  watchLaterButton: {
    backgroundColor: "#0277BD",
    // color: "white", // Ca ne fonctionne pas sur Pressable, il faut mettre sur Text
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  centered: {
    alignItems: "center",
    flex: 1,
  },

  metascore: {
    fontSize: 20,
    backgroundColor: "#62C74F",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 2,
  },

  actorInfo: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    // flexShrink: 0,
  },
});
