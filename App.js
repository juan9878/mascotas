import React from 'react';
import { View } from 'react-native';
import Header from './src/componentes/Header';
import ListaMascotas from './src/componentes/ListaMascotas';

const App = () => {
  return (
    <View style={styles.estiloContenedor}>
      <Header titulo={'Caninos'}/>
      <ListaMascotas />
    </View>
  );
};

const styles = {
  estiloContenedor: {
    backgroundColor: "#FEA561"
  }
}

export default App;
