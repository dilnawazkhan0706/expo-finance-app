import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";

interface IncomeBlockProps {
  incomeList: IncomeType[];
}

const IncomeBlock = ({ incomeList }: IncomeBlockProps) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    const amount = item.amount.split(".") || [];
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
    if (item.name === "Freelancing")
      icon = <WalletCardIcon width={22} height={22} color={Colors.white} />;
    else if (item.name === "Interest")
      icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />;
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#666",
              borderRadius: 50,
              padding: 5,
              alignSelf: "flex-start",
            }}
          >
            {icon}
          </View>
          <TouchableOpacity>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={{ color: Colors.white, fontSize: 16, fontWeight: "800" }}>
          ${amount[0]}.
          <Text style={{ fontSize: 12, fontWeight: "400" }}>{amount[1]}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: "700" }}>Income</Text>
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={incomeList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});
