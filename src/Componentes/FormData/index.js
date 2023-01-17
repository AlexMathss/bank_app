import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

export default function FormData({
    input,
    content,
    icones
}){
    return(
        <View style={styles.container}>
            <Text style={styles.titleInput}>{input}</Text>
            <View style={styles.content}>
                <Text style={styles.contentText}>{content}</Text>
                <View>
                    {icones}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    }
})