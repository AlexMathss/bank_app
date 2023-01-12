import React from "react";
import {View} from 'react-native';



export default function Partiners({
    imgLogo,
    pontos,
    descriptions
}){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text>Logo</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Ganhe</Text>
                <Text style={styles.subTitle}>5000 Pts</Text>
            </View>
            <Text style={styles.description}>Descriptions</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    containerLogo: {

    },
    content: {

    },
    title: {

    },
    subTitle: {

    },
    description: {
        
    }
})