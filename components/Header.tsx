import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "@/constants/Colors";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImage}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userTxtColor, { fontSize: 12 }]}>
              Hi, Jenny
            </Text>
            <Text style={[styles.userTxtColor, { fontSize: 16 }]}>
              Your <Text style={styles.boldTxt}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnWrapper}>
          <Text style={styles.btnTxt}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 20,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userTxtWrapper: {
    marginLeft: 10,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  userTxtColor: {
    color: Colors.white,
  },
  boldTxt: {
    fontWeight: "700",
  },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 12,
  },
});
