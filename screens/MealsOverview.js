import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

function MealsOverview() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
