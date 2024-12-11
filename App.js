
//Importing React and Component class for creating components
import React, { Component } from "react";
//Importing React Native components
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
//Importing the Button component
import Button from "./components/Button";
//Importing the row component
import Row from "./components/row";
//Importing the calculator logic and initial state
import calculator, { initialState } from "./util/calculator.js";

//the main App Component
export default class App extends Component {
  state = initialState;    //Initialize the state with the default values from calculator.js

  //Function to handle button taps
  handleTap = (type, value) => {
    //Update state based on button type and value
    this.setState((state) => calculator(type, value, state));
  };


  // Render method for the UI
  render() {
    return (
      <ImageBackground
        source={require("/Users/githmidesilva/Desktop/NewCal/GithmiCal/assets/CalWal.png")} // Path to your image
        style={styles.background}
      >
        <View style={styles.container}>
          {/* Status bar */}
          <SafeAreaView>
            <Text style={styles.value}>
              {this.state.currentValue === "Infinity" ||
              this.state.currentValue === "NaN"
                ? this.state.currentValue
                : parseFloat(this.state.currentValue).toLocaleString()}
            </Text>

            {/* Button are arranged in the rows */}
            <Row>
              <Button
                text="C" //Clear Button
                theme="secondary" //Secondary button style
                onPress={() => this.handleTap("clear")} //Clear the calculator state
              />
              <Button
                text="+/-"
                theme="secondary"
                onPress={() => this.handleTap("posneg")} //Change the sign of the number
              />
              <Button
                text="%"
                theme="secondary"
                onPress={() => this.handleTap("percentage")} //Calculate the percentatge
              />
              <Button
                text="/"
                theme="accent"
                onPress={() => this.handleTap("operator", "/")}//Setting division as the operator
              />
            </Row>

            <Row> {/* Second row of buttons */}
              <Button text="7" onPress={() => this.handleTap("number", 7)} />
              <Button text="8" onPress={() => this.handleTap("number", 8)} />
              <Button text="9" onPress={() => this.handleTap("number", 9)} />
              <Button
                text="X"  //The Multiplication operator
                theme="accent"
                onPress={() => this.handleTap("operator", "*")}
              />
            </Row>

            <Row>{/* Third row of buttons */}
              <Button text="4" onPress={() => this.handleTap("number", 4)} />
              <Button text="5" onPress={() => this.handleTap("number", 5)} />
              <Button text="6" onPress={() => this.handleTap("number", 6)} />
              <Button
                text="-" // Subtraction operator
                theme="accent"
                onPress={() => this.handleTap("operator", "-")}
              />
            </Row>

            <Row> {/* Fourth row of buttons */}
              <Button text="1" onPress={() => this.handleTap("number", 1)} />
              <Button text="2" onPress={() => this.handleTap("number", 2)} />
              <Button text="3" onPress={() => this.handleTap("number", 3)} />
              <Button
                text="+" // Addition operator
                theme="accent"
                onPress={() => this.handleTap("operator", "+")}
              />
            </Row>

            <Row>  {/* Last row of buttons */}
              <Button text="0" onPress={() => this.handleTap("number", 0)} />
              <Button text="." onPress={() => this.handleTap("number", ".")} />
              <Button
                text="=" //The Equals button
                theme="accent" // Replaced "primary" with "accent"
                onPress={() => this.handleTap("equal", "=")} //Perform the calculation
              />
            </Row>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

// Styles for App
const styles = StyleSheet.create({
  background: {
    flex: 1,//Making the background cover the whole screen
  },
  container: {
    flex: 1, //Filling available space
    backgroundColor: "transparent",
    justifyContent: "flex-end", //Position content at the bottom
  },
  value: {
    color: "#00000", //Text color (black) of the output
    fontSize: 50,
    fontFamily: "sans-serif", // Use proper font family name
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
