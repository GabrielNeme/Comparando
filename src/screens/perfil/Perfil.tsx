import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation() as any;


  return (
    <ScrollView>
       <View style={styles.container}>
      <Image source={require('../../../assets/logos/logo.png')} style={styles.logo} />

      <View style={styles.profileContainer}>
        <Image source={require('../../../assets/perfil/perfil.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Gabriel Costa</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurações Gerais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cupons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText} onPress={() => navigation.navigate("Login")}>
            Sair
        </Text>
      </TouchableOpacity>
    </View>  
    </ScrollView>
  );
};

export default ProfileScreen;