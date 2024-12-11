//Importing the necessary components and libraries from React Native
import { StyleSheet, View } from "react-native";

//Defining a functional component named 'Row'
const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

//creating styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

//Exporting the Row component for use in other parts of the app
export default Row;