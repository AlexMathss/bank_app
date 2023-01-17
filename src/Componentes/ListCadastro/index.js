import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import FormData from "../FormData";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function ListCadastro(){
    return(
        <View  style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.scrollContainer}>
                    <FormData
                        input="Nome completo" 
                        content="Alex Matheus" 
                        icones={<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>}
                    />
                    <FormData
                        input="Como você gostaria de ser chamado?"
                        content="Alex Matheus"
                        icones={<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>}
                    />
                    <View style={styles.input}>
                        <Text style={styles.titleInput}>Email</Text>
                        <View style={styles.content}>
                            <Text style={styles.contentText}>alex93@hotmail.com.br</Text>
                            <View>
                                <AntDesign name="exclamationcircleo" size={20} color="purple"/>
                            </View>
                        </View>
                    </View>
                    <FormData
                        input="Data de nascimento"
                        content="10 de nov. de 1997"
                        icones={<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>}
                    />
                    <View style={styles.input}>
                        <Text style={styles.titleInput}>Telefone</Text>
                        <View style={styles.content}>
                            <Text style={styles.contentText}>+55 (41) 98825-2427</Text>
                            <View>
                                <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>
                            </View>
                        </View>
                    </View>
                    <FormData
                        input="CPF"
                        content="105.829.449-02"
                        icones={<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>}
                    />
                </View>
                
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1, 
        alignItems: 'center', 
        borderTopRightRadius: 15, 
        borderTopLeftRadius: 15
    },
    scroll: {
        width: '95%', 
        backgroundColor: 'orange'
    },
    scrollContainer: {
        width: '100%', 
        alignItems: 'center', 
        backgroundColor: 'red', 
        flex: 1
    }
})