import { Fragment } from "react";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Colors from "@/constants/Colors";

const Profile = () => {
  return (
    <Fragment>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </Fragment>
  );
};

export default Profile;

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
