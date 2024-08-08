import { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { PieChart } from "react-native-gifted-charts";

import Colors from "@/constants/Colors";
import Header from "@/components/Header";
import ExpenseBlock from "@/components/ExpenseBlock";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";

import ExpenseList from "@/data/expenses.json";
import IncomeList from "@/data/income.json";
import SpendingList from "@/data/spending.json";

const pieData = [
  {
    value: 47,
    color: Colors.tintColor,
    focused: true,
    text: "47%",
  },
  {
    value: 40,
    color: Colors.blue,
    text: "40%",
  },
  {
    value: 16,
    color: Colors.white,
    text: "16%",
  },
  { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
];

const Page = () => {
  return (
    <Fragment>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 70 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                My <Text style={{ fontWeight: 700 }}>Expenses</Text>
              </Text>
              <Text
                style={{ fontSize: 36, fontWeight: 700, color: Colors.white }}
              >
                $1,475.<Text style={{ fontWeight: 400, fontSize: 22 }}>00</Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expenseList={ExpenseList} />
          <IncomeBlock incomeList={IncomeList} />
          <SpendingBlock spendingList={SpendingList} />
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
