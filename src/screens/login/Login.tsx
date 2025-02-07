import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation() as any;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
  
    try {
      const storedUser = await AsyncStorage.getItem("userData");
  
      if (!storedUser) {
        Alert.alert("Erro", "Nenhum usuário cadastrado!");
        return;
      }
  
      const userData = JSON.parse(storedUser);
      console.log("Usuário salvo:", userData);
  
      if (userData.email.toLowerCase() === email.trim().toLowerCase() && userData.password === password) {
        navigation.navigate("MainTabs", { screen: "Home" });
      } else {
        Alert.alert("Erro", "Email ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      Alert.alert("Erro", "Ocorreu um erro ao fazer login.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logos/logo.png")} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Senha"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
          <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.forgotPassword} onPress={() => Alert.alert("Recuperação", "Função em desenvolvimento!")}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={() => Alert.alert("Login Google", "Função em desenvolvimento!")}>
        <Image source={require("../../../assets/login/googleLogo.png")} style={styles.googleLogo} />
        <Text style={styles.googleButtonText}>Login com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
