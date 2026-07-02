// screens/DetalhesScreen.js
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

export default function DetalhesScreen({ navigation, route }) {
  const livroExistente = route.params?.livro;
  const onSalvar = route.params?.onSalvar;

  const [titulo, setTitulo] = useState(livroExistente?.titulo || "");
  const [autor, setAutor] = useState(livroExistente?.autor || "");
  const [status, setStatus] = useState(livroExistente?.status || "Quero ler");
  const [paginas, setPaginas] = useState(livroExistente?.paginas || "");
  const [nota, setNota] = useState(livroExistente?.nota || "");

  const statusOpcoes = ["Quero ler", "Lendo", "Lido"];

  function salvar() {
    if (titulo === "" || autor === "") {
      Alert.alert("Atenção", "Preencha o título e o autor.");
      return;
    }
    const livro = { titulo, autor, status, paginas, nota };
    if (onSalvar) onSalvar(livro);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        {livroExistente ? "✏️ Editar Livro" : "➕ Novo Livro"}
      </Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: O Alquimista"
        placeholderTextColor="#aaa"
        value={titulo}
        onChangeText={setTitulo}
        returnKeyType="next"
        onSubmitEditing={() => autorRef?.focus()}
      />

      <Text style={styles.label}>Autor</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Paulo Coelho"
        placeholderTextColor="#aaa"
        value={autor}
        onChangeText={setAutor}
        returnKeyType="next"
      />

      <Text style={styles.label}>Número de Páginas</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 208"
        placeholderTextColor="#aaa"
        value={paginas}
        onChangeText={setPaginas}
        keyboardType="numeric"
        returnKeyType="next"
      />

      <Text style={styles.label}>Sua Nota (0 a 10)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 9"
        placeholderTextColor="#aaa"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={salvar}
      />

      <Text style={styles.label}>Status de Leitura</Text>
      <View style={styles.statusArea}>
        {statusOpcoes.map((op) => (
          <TouchableOpacity
            key={op}
            style={[styles.statusBotao, status === op && styles.statusAtivo]}
            onPress={() => setStatus(op)}
          >
            <Text style={[styles.statusTexto, status === op && styles.statusTextoAtivo]}>
              {op}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar Livro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f0",
    padding: 20,
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d2d2d",
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2d2d2d",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: "#2d2d2d",
  },
  statusArea: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
    flexWrap: "wrap",
  },
  statusBotao: {
    borderWidth: 1,
    borderColor: "#7c6f5b",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statusAtivo: {
    backgroundColor: "#7c6f5b",
  },
  statusTexto: {
    color: "#7c6f5b",
    fontWeight: "600",
    fontSize: 13,
  },
  statusTextoAtivo: {
    color: "#fff",
  },
  botaoSalvar: {
    backgroundColor: "#7c6f5b",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 32,
    marginBottom: 40,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
