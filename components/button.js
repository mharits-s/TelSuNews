import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B20819",
    padding:  16,
    alignItems: "center",
    margin: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Button;
