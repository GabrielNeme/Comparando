import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBD100",
        padding: 24,
    },
    title: {
        marginLeft: 58,
        marginTop: 30,
        fontSize: 27,
        fontWeight: 'bold',
    },
    divider: {
        width: "80%",
        height: 2,
        backgroundColor: "#000",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 36,
    },
    input: {
        marginRight: 45,
        marginLeft: 45,
        marginTop: 14,
        height: 40,
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 8,
        fontSize: 14,
        color: '#FFF',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 45, // Mantém o alinhamento com o texto
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 4,
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: '#FFF', // Cor que indica seleção
    },
    terms: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 45,
        marginTop: 20,
    },
    registerButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
