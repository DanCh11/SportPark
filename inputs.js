import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet,KeyboardAvoidingView } from 'react-native';
import {RadioButton} from 'react-native-paper';

class Inputs extends Component {
  state = { 
    varsta: ' ',
    inaltimea: ' ',
    kilograme: ' ',
    gen: 'masculan'
  }
  handleVarsta = (text) => {
    this.setState({varsta: text})
  }
  handleInaltimea = (text) => {
    this.setState({inaltimea: text})
  }
  handleKilograme = (text) => {
    this.setState({kilograme: text})
  }

  render() {
    const {gen} = this.state;

    return (

      <View style = {StyleSheet.container}>
       <TextInput style = {styles.input}
          underlineColorAndroid = 'transparent'
          placeholder = 'Varsta'
          placeholderTextColor = '#A9A9A9'
          autoCapitalize = 'none'
          onChangeText = {this.handleVarsta} />

       <TextInput style = {styles.input}
          underlineColorAndroid = 'transparent'
          placeholder = 'Inaltimea'
          placeholderTextColor = '#A9A9A9'
          autoCapitalize ='none'
          onChangeText = {this.handleInaltimea}/>
      
       <TextInput style = {styles.input}
          underlineColorAndroid = 'transparent'
          placeholder = 'Masa'
          placeholderTextColor = '#A9A9A9'
          autoCapitalize = 'none'
          onChangeText = {this.handleKilograme}/>
      
      <RadioButton
          label="pteuh"
          value="first"
          status={gen === 'first' ? 'gen' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
      <RadioButton
          value="second"
          status={gen === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
          

        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.date(this.state.varsta, 
                            this.state.inaltimea,
                            this.state.kilograme,
                            this.state.gen)
          }>
          <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs 

const styles = StyleSheet.create({
  container: {
    marginTop: 200
    
  },
  input: {
    margin: 15,
    height: 30,
    borderColor: '#dbdee0',
    borderWidth: 0.3,
  },
  submitButton: {
    backgroundColor: '#962929',
    padding: 7,
    margin: 100,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  }
})