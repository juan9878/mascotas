import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import DetalleMascota from './DetalleMascota';

class ListaMascotas extends Component {
    state = { mascotas: [] };

    componentDidMount() {
        axios.get("http://192.168.1.6:8585/WRESTMASCOTAS/webresources/udenar.mascotas")
            .then(response => {
                this.setState({ mascotas: response.data });
            })
            .catch(error => {
                console.log("Error: " + error);
            });

    }
    listaAMostrar = () => {
        return this.state.mascotas.map(mascotas => {
            return <DetalleMascota key={mascotas.id} mascotas={mascotas}></DetalleMascota>
        })
    };

    render() {
        return <ScrollView>{this.listaAMostrar()}</ScrollView>;
    }
}

export default ListaMascotas;