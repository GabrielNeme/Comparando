import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen() {
  const navigation = useNavigation() as any;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPromotions, setAcceptPromotions] = useState(false);

  const handleDateChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    let formattedDate = cleaned;
    if (cleaned.length >= 3) {
      formattedDate = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    if (cleaned.length >= 5) {
      formattedDate += `/${cleaned.slice(4, 8)}`;
    }
    setBirthDate(formattedDate);
  };

  const handleCpfChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, ''); 
    let formattedCpf = cleaned;
    if (cleaned.length >= 4) {
      formattedCpf = `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}`;
    }
    if (cleaned.length >= 7) {
      formattedCpf += `.${cleaned.slice(6, 9)}`;
    }
    if (cleaned.length >= 10) {
      formattedCpf += `-${cleaned.slice(9, 11)}`;
    }
    setCpf(formattedCpf);
  };

  const handleRegister = async () => {
    if (!email || !phone || !password || !birthDate || !cpf || !acceptTerms) {
      Alert.alert("Erro", "Preencha todos os campos e aceite os termos.");
      return;
    }

    const userData = {
      email,
      phone,
      password,
      birthDate,
      cpf,
    };

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      Alert.alert("Cadastro", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao salvar dados de cadastro:", error);
      Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe seus dados</Text>

      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="Informe seu e-mail"
        keyboardType="email-address"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe seu celular"
        keyboardType="phone-pad"
        placeholderTextColor="#FFF"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe sua senha"
        secureTextEntry
        placeholderTextColor="#FFF"
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento DD/MM/AAAA"
        keyboardType="numeric"
        placeholderTextColor="#FFF"
        maxLength={10}
        value={birthDate}
        onChangeText={handleDateChange}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        placeholderTextColor="#FFF"
        maxLength={14}
        value={cpf}
        onChangeText={handleCpfChange}
      />

      <View style={styles.divider} />

      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={[styles.checkbox, acceptTerms && styles.checkboxSelected]}
          onPress={() => setAcceptTerms(!acceptTerms)}
        />
        <Text style={styles.terms}>
          Afirmo que li e aceito os termos {'\n'} e condições.
        </Text>
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={[styles.checkbox, acceptPromotions && styles.checkboxSelected]}
          onPress={() => setAcceptPromotions(!acceptPromotions)}
        />
        <Text style={styles.terms}>
          Desejo receber conteúdo {'\n'} promocional via e-mail.
        </Text>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
