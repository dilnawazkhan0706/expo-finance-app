import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

interface ExpenseBlockProps {
  expenseList: ExpenseType[];
}

const ExpenseBlock = ({ expenseList }: ExpenseBlockProps) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (!index)
      return (
        <TouchableOpacity>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    const amount = item.amount?.split(".") || [];
    let bgColor = Colors.tintColor;
    let textColor = Colors.white;

    if (item.name === "Food") {
      bgColor = Colors.blue;
      textColor = Colors.black;
    } else if (item.name === "Saving") {
      bgColor = Colors.white;
      textColor = Colors.black;
    }

    return (
      <View style={[styles.expenseBlock, { backgroundColor: bgColor }]}>
        <Text style={[styles.expenseBlockNameTxt, { color: textColor }]}>
          {item.name}
        </Text>
        <Text style={[styles.expenseBlockAmountTxt, { color: textColor }]}>
          ${amount[0]}.
          <Text style={[styles.expenseBlockAmountTxt1, { color: textColor }]}>
            {amount[1]}
          </Text>
        </Text>
        <View style={styles.expenseBlockPercentContainer}>
          <Text style={[styles.expenseBlockPercentTxt, { color: textColor }]}>
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const STATIC = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={STATIC.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expenseBlockNameTxt: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockAmountTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockAmountTxt1: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlockPercentContainer: {
    backgroundColor: "rgba(255,255,255,.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  expenseBlockPercentTxt: {
    color: Colors.white,
    fontSize: 14,
  },
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
