import React, { useState, useEffect } from "react";
import styles from "./styles";
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";

export default function Home() {
    const [conselho, setConselho] = useState('');
    
    const fetchConselho = () => {
        axios.get(`https://api.adviceslip.com/advice?_=${Date.now()}`)
            .then(response => {
                if (response.data && response.data.slip) {
                    setConselho(response.data.slip.advice);
                } else {
                    console.log('Não foi possível localizar conselho');
                }
            })
            .catch(() => {
                console.log('falha ao buscar conselho');
            });
    };

    useEffect(()=> {
        fetchConselho();
    }, [])

    const atualizarConselho = () => {
        fetchConselho();
    };

    return (
        <SafeAreaView style={styles.conteiner}>
            <View>
                <Text>{conselho}</Text> 
            </View>
            <View>
                <TouchableOpacity onPress={atualizarConselho}>
                    <Text>Clique para gerar um conselho!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
