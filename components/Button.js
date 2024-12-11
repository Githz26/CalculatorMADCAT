//Importing necessary components from React Native
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
//Importing PropTypes for type-checking the props
import PropTypes from "prop-types";

//Defining Constants for commonly used values
//Default - Numbers ,  Secondary - C / +/- /%   ,  Accent - /,*,-,+
const COLORS = {
  default: "#c35eb0", // Default button color
  secondary: "#8438d4", // Secondary button color
  accent: "#41b98f", // Accent button color
  textPrimary: "#FFFFFF", // Default text color for the numbers
};

const FONT_FAMILY = "sans-serif"; // A platform-agnostic font

//Getting screen dimensions to makw the buttons responsie
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4.1; //Make button width 1/4 of the screen width

//Button Component
export default function Button({ onPress, text, size = "single", theme = "default" }) {
  //Checking if the theme is valid; fallback to "default" if invalid
  const validThemes = ["default", "secondary", "accent"];
  const resolvedTheme = validThemes.includes(theme) ? theme : "default";

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  //Adjusting styles for size
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  //Adjusting styles for resolved theme
  if (resolvedTheme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
  } else if (resolvedTheme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

//PropTypes for validation
Button.propTypes = {
  onPress: PropTypes.func.isRequired, //onPress must be a function
  text: PropTypes.string.isRequired, //text must be a string
  size: PropTypes.oneOf(["single", "double"]),
  theme: PropTypes.oneOf(["default", "secondary", "accent"]), //Strictly defined acceptable themes
};

//Styles
const styles = StyleSheet.create({
  button: {
    //Default button color
    backgroundColor: COLORS.default,
    //Allow button to fill available space
    flex: 1,
    height: Math.floor(buttonWidth - 5),
    width: Math.floor(buttonWidth - 20),
    alignItems: "center", //Centering the text horizontally
    justifyContent: "center",//Centering the text vertically
    borderRadius: Math.floor(buttonWidth / 2), // Rounded corners
    margin: 2,
    opacity: 0.85, //Slight transparency for the button
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: 28,//Set font size
    fontFamily: FONT_FAMILY,//Use the defined font family
  },
  buttonDouble: {
    width: screen.width / 2 - 10, //Adjust for double-sized buttons
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: COLORS.secondary, //Secondary button color
    opacity: 0.85,
  },
  buttonAccent: {
    backgroundColor: COLORS.accent, //Accent button color
    opacity: 0.85,
  },
});
