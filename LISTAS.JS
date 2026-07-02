// screens/ListaScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
export default function ListaScreen({ navigation }) {
  const [livros, setLivros] = useState([
    { id: 1, titulo: "Água Para Elefante", autor: "Sara Gruen", status: "Lido" },
    { id: 2, titulo: "Crepúsculo", autor: "Stephenie Meyer", status: "Lendo" },
    { id: 3, titulo: "Fallen", autor: "Lauren Kate", status: "Quero ler" },
    { id: 4, titulo: "Uma Longa Jornada", autor: "Nicholas Sparks", status: "Lido" }
  ]);
  const [busca, setBusca] = useState("");

  const statusOrdem = ["Quero ler", "Lendo", "Lido"];

  function trocarStatus(id) {
    setLivros((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        const atual = statusOrdem.indexOf(l.status);
        const proximo = (atual + 1) % statusOrdem.length;
        return { ...l, status: statusOrdem[proximo] };
      })
    );
  }

  const livrosFiltrados = livros.filter((l) =>
    l.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  function remover(id) {
  Alert.alert("Remover", "Deseja remover este livro?", [
    { text: "Cancelar" },
    {
      text: "Remover",
      onPress: () => setLivros((prev) => prev.filter((l) => l.id !== id)),
    },
  ]);
}

  function adicionarLivro(novoLivro) {
    setLivros((prev) => [...prev, { ...novoLivro, id: Date.now() }]);
  }

  const corBadge = (status) => {
    if (status === "Lido") return { bg: "#d4edda", texto: "#2d6a4f" };
    if (status === "Lendo") return { bg: "#fff3cd", texto: "#856404" };
    return { bg: "#ede8e0", texto: "#7c6f5b" };
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.busca}
        placeholder="Buscar livro..."
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
        returnKeyType="search"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {livrosFiltrados.length === 0 && (
          <Text style={styles.vazio}>Nenhum livro encontrado.</Text>
        )}
        {livrosFiltrados.map((livro) => {
          const cor = corBadge(livro.status);
          return (
            <View key={livro.id} style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitulo}>{livro.titulo}</Text>
                <Text style={styles.cardAutor}>{livro.autor}</Text>
                <TouchableOpacity
                  style={[styles.badge, { backgroundColor: cor.bg }]}
                  onPress={() => trocarStatus(livro.id)}
                >
                  <Text style={[styles.badgeTexto, { color: cor.texto }]}>
                    {livro.status} ↻
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => remover(livro.id)}>
                <Text style={styles.remover}>🗑️</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          navigation.navigate("Detalhes", { onSalvar: adicionarLivro })
        }
      >
        <Text style={styles.botaoTexto}>+ Adicionar Livro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f0",
    padding: 20,
    paddingTop: 20,
  },
  busca: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: "#2d2d2d",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  vazio: {
    textAlign: "center",
    color: "#888880",
    marginTop: 40,
    fontSize: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2d2d2d",
    marginBottom: 2,
  },
  cardAutor: {
    fontSize: 13,
    color: "#888880",
    marginBottom: 8,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: "600",
  },
  remover: {
    fontSize: 20,
    paddingLeft: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#7c6f5b",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
