import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.back}>
                    <Text style={styles.icone}>Back</Text>
                    <Text style={styles.title}>Completar cadastro</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header: {},
    back: {},
    icone: {},
    title: {},
    containerBtn: {},
    activeBtn: {},
    activeText: {},
    disableBtn: {},
    btnText: {}
})