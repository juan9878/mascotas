import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = (props) => {

    const { estiloTexto, estiloContenedor, estiloLogo } = styles;
/*
Carga del logo en la linea 12
*/ 
    return (
        <View style={estiloContenedor}>
            <Image style={estiloLogo} source={require('../../recursos/logo2.png')} />
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );
};

const styles = {
    estiloTexto: {
        fontSize: 30,
        color: "#1e1e1e",
        fontWeight: 'bold'
    },
    estiloContenedor: {
        backgroundColor: '#D47E3C',
        flexDirection: "row",
        alignItems: 'center'
    },
    estiloLogo:{
        width: 100,
        height: 100
    }
};

export default Header;