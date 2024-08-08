import { Fragment } from "react";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Colors from "@/constants/Colors";

const Transactions = () => {
  return (
    <Fragment>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Transactions</Text>
      </View>
    </Fragment>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
});
