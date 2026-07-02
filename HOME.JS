// screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>📚 Minha Estante</Text>
        <Text style={styles.subtitulo}>Organize sua leitura com facilidade</Text>
      </View>

      <View style={styles.cardArea}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Lista")}
        >
          <Text style={styles.cardIcone}>📖</Text>
          <Text style={styles.cardTitulo}>Meus Livros</Text>
          <Text style={styles.cardDescricao}>Veja todos os livros da sua estante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Detalhes")}
        >
          <Text style={styles.cardIcone}>🔍</Text>
          <Text style={styles.cardTitulo}>Detalhes</Text>
          <Text style={styles.cardDescricao}>Consulte informações de um livro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.cardIcone}>👤</Text>
          <Text style={styles.cardTitulo}>Meu Perfil</Text>
          <Text style={styles.cardDescricao}>Veja seus dados de leitor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f0",
  },
  header: {
    backgroundColor: "#7c6f5b",
    padding: 32,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: "#e8e2da",
    textAlign: "center",
  },
  cardArea: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardIcone: {
    fontSize: 32,
    marginBottom: 8,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d2d2d",
    marginBottom: 4,
  },
  cardDescricao: {
    fontSize: 13,
    color: "#888880",
  },
});
