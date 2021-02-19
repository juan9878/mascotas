import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.botonPresionado} style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>Información</Text>
        </TouchableOpacity>
    );
};

/*
Se agregan los estilos para el boton que accede a la informacion de la raza (Url)
*/

const styles = {
    estiloTexto: {
        fontSize: 20,// Se utilizó un tamaño de letra lo suficientemente visible en todos los elementos 
        textAlign: 'center', // El alineado del texto se hizo centrado para que no se desperdicie espacio en el boton 
        fontWeight: '400',
        fontFamily: 'lobster',
        paddingBottom: 3,
        color: '#F6DFCD' //Se tomó un color claro para que hiciera buen contraste con el background del boton
    },
    estiloBoton: {
        backgroundColor: '#603616',
        alignItems: 'center',
        marginTop: 10, // Separacion con el item superior
        marginLeft: 7, //etiquetas de estilización del boton
        marginRight: 7,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
        marginBotton: 15
    }
}

export default Button;