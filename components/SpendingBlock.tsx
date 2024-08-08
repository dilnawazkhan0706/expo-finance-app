import { StyleSheet, Text, View } from "react-native";

import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";

interface SpendingBlockProps {
  spendingList: SpendingType[];
}

interface IconObjectType {
  "AirBnB Rent": React.JSX.Element;
  Netflix: React.JSX.Element;
  Spotify: React.JSX.Element;
  Amazon: React.JSX.Element;
  Figma: React.JSX.Element;
  "Online Shopping": React.JSX.Element;
}

const IconObject: IconObjectType = {
  "AirBnB Rent": <AirbnbIcon width={22} height={22} color={Colors.white} />,
  Netflix: <NetflixIcon width={22} height={22} color={Colors.white} />,
  Spotify: <SpotifyIcon width={22} height={22} color={Colors.white} />,
  Amazon: <AmazonIcon width={22} height={22} color={Colors.white} />,
  Figma: <FigmaIcon width={22} height={22} color={Colors.white} />,
  "Online Shopping": (
    <ShoopingCartIcon width={22} height={22} color={Colors.white} />
  ),
};

const SpendingBlock = ({ spendingList }: SpendingBlockProps) => {
  let icon = <DollarIcon width={22} height={22} color={Colors.white} />;

  return (
    <View style={styles.spendingSectionWrapper}>
      <Text style={styles.sectionTitle}>
        August <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>
      {spendingList.map((item) => (
        <View key={item.id} style={styles.spendingWrapper}>
          <View style={styles.iconWrapper}>
            {IconObject[item.name as keyof IconObjectType] || icon}
          </View>
          <View style={styles.textWrapper}>
            <View style={{ gap: 5 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={{ color: Colors.white }}>{item.date}</Text>
            </View>
            <Text style={styles.itemName}>${item.amount}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
  spendingSectionWrapper: {
    marginVertical: 20,
    alignItems: "flex-start",
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
  spendingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconWrapper: {
    backgroundColor: Colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
