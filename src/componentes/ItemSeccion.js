import React from 'react';
import {View} from 'react-native';

const ItemSeccion = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderColor: "#000",
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "flex-start"
    }
};
export default ItemSeccion;