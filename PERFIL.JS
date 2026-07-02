// LoginScreen.js
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const senhaRef = useRef(null);

  function entrar() {
    if (email === "" || senha === "") {
      Alert.alert("Atenção", "Preencha o email e a senha para continuar.");
      return;
    }
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.nomeApp}>📚 ReadBox</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>Bem-vindo 👋</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => senhaRef.current && senhaRef.current.focus()}
          blurOnSubmit={false}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          ref={senhaRef}
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          returnKeyType="done"
          onSubmitEditing={entrar}
        />

        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f0", // mesmo fundo neutro das outras telas
    justifyContent: "center",
    padding: 24,
  },
  nomeApp: {
    fontSize: 22,
    fontWeight: "800",
    color: "#7c6f5b",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#ffffff", // card claro sobre fundo bege -> contraste suave
    borderRadius: 16,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2d2d2d",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: "#888880",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    color: "#333",
  },
  botao: {
    backgroundColor: "#7c6f5b", // mesmo marrom quente do botão "+ Adicionar Livro"
    padding: 14,
    borderRadius: 10,
    marginTop: 24,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
