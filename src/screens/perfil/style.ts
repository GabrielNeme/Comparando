import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: 818,
      flex: 1,
      backgroundColor: '#FFF',
      padding: 16,
    },
    logo: {
      width: 120,
      height: 90,
      alignSelf: 'center',
      marginLeft: 300,
      marginTop: 20,
      resizeMode: 'contain',
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 10,
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    profileRole: {
      fontSize: 14,
      color: '#777',
      fontStyle: 'italic',
    },
    profileRating: {
      fontSize: 14,
      color: '#777',
    },
    menu: {
      borderTopWidth: 1,
      borderColor: '#ccc',
      marginTop: 20,
    },
    menuItem: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    menuText: {
      fontSize: 16,
    },
    logoutButton: {
      marginTop: 20,
    },
    logoutText: {
      marginTop: 20,
      fontSize: 19,
      color: '#FFCC00',
      fontWeight: 'bold',
    },
  });
  