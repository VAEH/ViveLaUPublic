import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Infoslider from 'react-native-infoslider'
import Slider from '../Slides1/DeporteSlider';
import {Thumbnail, Button, Icon} from 'native-base';
import {createTabNavigator, createBottomTabNavigator} from 'react-navigation';
export default class Taekwondo extends React.Component {
  
  static navigationOptions = {
    
    headerTitle: 'Taekwondo',
  }
  render() {
    return (
        <View style={{  alignItems: 'center' }}>
    <Text></Text>
    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between', alignItems:'center'}} >
    <Text style={styles.welcome}>
                Taekwondo</Text>
                <Image source={require('../assets/Img/grouptkd.png')}
      style={{width: 300, height: 220}} /> 

      
      
      <Text style={{fontStyle:'italic',fontSize: 15,  alignItems: 'stretch',
         justifyContent:'center', textAlign:'justify', alignContent:'center' }}>
               El Club de la Universidad Autonoma Latinoamericana, pertenece a uno de los Clubes más
               Antiguos de la Ciudad de Medellín, siendo asi; uno de los mayores ejemplos en esta modalidad
               Donde su principal principio es contribuir a la formación de Profesionales integros para
               el futuro. </Text>
               
  <View style={{flex:1}}>             
<Button  iconLeft transparent style={styles.btnDeporte }
onPress={ ()=>{ Linking.openURL('http://www.unaula.edu.co/dependencias/bienestar/desarrollo/taekwondo')}} >
    <Icon name='ios-link' style={{fontSize:48}} />
            <Text>Quiero ser Parte!</Text>
  </Button>
</View>
      
</View>
      
      </View>
      
    );
    
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    //flex:2,
    fontStyle:'italic',
    color:'#5E0404',
    fontSize: 30,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
   // textAlign:'center',
    //alignContent:'center',
    //textAlign: 'center',
    //margin: 10,
    //backgroundColor:'#5e0404'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
  btnDeporte: {
    height:70, 
    borderWidth:2,
    borderColor:'#5e0404',
    //backgroundColor:'#0b5345'
  },
});

