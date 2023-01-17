import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import FormData from "../FormData";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function ListCadastro(){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //Criar outro toggle button para selecionar se recebe notificações

    return(
        <View  style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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
                                <AntDesign name="exclamationcircleo" size={20} color="#441297"/>
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

                    <View style={styles.input}>
                        <Text style={styles.titleInput}>Nacionalidade</Text>
                        <View style={styles.content}>
                            <Text style={styles.contentText}>Você é brasileiro?</Text>
                            <Switch
                                trackColor={{false: '#FFF', true: '#34c659'}}
                                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    
                    <FormData
                        input="CPF"
                        content="105.829.449-02"
                        icones={<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#59965b"/>}
                    />
                    <FormData
                        input="Estado"
                        content="PR"
                    />
                    <FormData
                        input="Cidade"
                        content="Campo Largo"
                    />
                    <FormData
                        input="Objetivo financeiro"
                        content="Sair das dividas"
                        //Colocar um pop-up com as opções
                    />
                    <View style={styles.input}>
                        <View style={styles.content}>
                            <Text style={[styles.contentText, {color: '#878789'}]}>Deseja participar de pesquisas online em{'\n'}troca de pontos e prêmios?</Text>
                            <Switch
                                trackColor={{false: '#FFF', true: '#34c659'}}
                                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={[styles.input, {flexDirection: 'row', alignItems: 'center', borderBottomColor: '#fff'}]}>
                        <TouchableOpacity style={styles.buttonCancelar}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSalvar}>
                            <Text style={styles.saveText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

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
        width: '95%'
    },
    scrollContainer: {
        width: '100%', 
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: 75,
        width: '95%',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#878789',
        marginBottom: 20
    },
    titleInput: {
        fontSize: 18,
        color: '#878789'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentText: {
        fontSize: 18
    },
    buttonCancelar: {
        width: '45%',
        borderWidth: 1,
        borderColor: '#6215dd',
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#6215dd'
    },
    buttonSalvar: {
        width: '45%',
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6215dd'
    },
    saveText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFF'
    },
})