import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ListCadastro from "../ListCadastro";

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.back}>
                    <TouchableOpacity>
                        <AntDesign name="arrowleft" size={20} color="#FFF" style={styles.icone}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Completar cadastro</Text>
                    <Text> </Text>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.activeBtn}>
                        <Text style={styles.activeText}>Meus dados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.disableBtn}>
                        <Text style={styles.btnText}>Profissional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.disableBtn}>
                        <Text style={styles.btnText}>Financeiro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ListCadastro/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6215dd'
    },
    header: {
        height: 120,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 30,
        marginTop: 20
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icone: {},
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600'
    },
    containerBtn: {
        backgroundColor: '#905be7',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50
    },
    activeBtn: {
        backgroundColor: '#FFF',
        width: 120,
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#5921b8'
    },
    disableBtn: {
        width: 120
    },
    btnText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#5921b8'
    }
})