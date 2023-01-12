import React from "react";
import {ScrollView, StyleSheet,TouchableOpacity,View} from 'react-native';

export default function Parceiros(){
    return(
        <View>
            <View>
                <TouchableOpacity>
                    <Text>Ganhar Pontos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Trocar Pontos</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Ofertas</Text>
                <View>
                    <ScrollView>
                        
                    </ScrollView>
                </View>
            </View>
            <View>
                {/* Imagem de fundo */}
                <Text>Imagem</Text>
                <Text>Conheça o cartão de crédito ideal para você.</Text>
                <Text>Descubra o cartão que te entrega os melhores benefícios.</Text>
            </View>
            <View>
                <Text>Pareceiros</Text>
                <TouchableOpacity>Ver mais </TouchableOpacity>
                <View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})