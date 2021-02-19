import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';


const DetalleMascota = (props) => {
    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                <Text style={styles.baseText}>Raza:</Text>
                <Text style={styles.estiloTexto}>{props.mascotas.raza}</Text>
                <Text style={styles.baseText}>     Nombre:</Text>
                <Text style={styles.estiloTexto}>{props.mascotas.nombre}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Image style={styles.estiloImagen} source={{ uri: props.mascotas.imagen }} />
            </ItemSeccion>
            <ItemSeccion>
                <Button botonPresionado={() => { Linking.openURL(props.mascotas.informacion); }} />
            </ItemSeccion>
        </Item>
    );

};


const styles = {
    estiloContenedor: {
        flexDirection: "row", // La opcion column hace que se trabaje la aplicacion mediante columnas
        justifyContent: "space-evenly",
        alignItems: "stretch" // stretch hace que se tome todo el ancho posible
    },
    estiloImagen: {
        height: 250,
        width: 320
    },
    estiloTexto: {
        fontSize: 17,
        textTransform: 'uppercase'
    },
    baseText: {
        fontSize: 17,
        fontWeight: "bold"
    }

}

export default DetalleMascota;