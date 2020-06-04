import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import Radiobutton from "./radiobutton";

export default class Input extends Component {
  state = {
    varsta: " ",
    inaltimea: " ",
    kilograme: " "
  };
  handleVarsta = text => {
    this.setState({ varsta: text });
  };
  handleInaltimea = text => {
    this.setState({ inaltimea: text });
  };
  handleKilograme = text => {
    this.setState({ kilograme: text });
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Varsta"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          onChangeText={this.handleVarsta}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Inaltimea"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          onChangeText={this.handleInaltimea}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Masa"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          onChangeText={this.handleKilograme}
        />

        <TouchableOpacity>
          <Radiobutton />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.date(
              this.state.varsta,
              this.state.inaltimea,
              this.state.kilograme
            )
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  },
  input: {
    margin: 15,
    height: 30,
    borderColor: "#dbdee0",
    borderWidth: 0.3
  },
  submitButton: {
    backgroundColor: "#962929",
    padding: 7,
    margin: 100,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
