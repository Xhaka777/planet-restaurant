import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { images } from "../../constants";
import { SearchInput, Table } from "../../components";
import { useSelector } from "react-redux";
import { useTheme } from "@/context/ThemeProvider";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const posts = [
    {
      id: "1",
      title: "Tavolina 1",
      avatar: "https://via.placeholder.com/300",
      containerStyles: "bg-green-500",
    },
    {
      id: "2",
      title: "Tavolina 2",
      avatar: "https://via.placeholder.com/300",
      containerStyles: "bg-red-500",
    },
    {
      id: "3",
      title: "Tavolina 3",
      avatar: "https://via.placeholder.com/300",
      containerStyles: "bg-red-500",
    },
    // Add more items as needed
  ];

  // const isSwitchOn = useSelector((state) => state.switch.isSwitchOn);
  const jobTypes = [
    "Kati 1",
    "Kati 2",
    "Kati 3",
    "Kati 4",
    "Kati 5",
    "Kati 6",
    "Kati 7",
    "Kati 8",
    "Kati 9",
  ];
  const [activeJobTypes, setActiveJobTypes] = useState("Kati 1");
  const [selectTable, setSelectedTable] = useState();

  const handleNavigation = (id) => {
    navigation.navigate('(table-details)')
  };

  return (
    <SafeAreaView
      className="h-full"
      style={{ backgroundColor: theme.background }}
    >
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text
                  className={`font-pmedium text-sm`}
                  style={{ color: theme.text }}
                >
                  Restauranti
                </Text>
                <Text
                  className="text-2xl font-psemibold"
                  style={{ color: theme.text }}
                >
                  Planet Accounting
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.Logo}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-5">
              <Text
                className="text-lg font-pregular mb-3"
                style={{ color: theme.text }}
              >
                Tavolinat
              </Text>
            </View>

            <View className="w-full mt-2 mb-2">
              <FlatList
                data={jobTypes}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.tab(activeJobTypes, item)}>
                    <Text style={styles.tabText(activeJobTypes, item)}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: 12 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      />
      <Table onCardPress={handleNavigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  tab: (activeJobTypes, item) => ({
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: activeJobTypes === item ? "#705cb4" : "#C1C0C8",
    borderColor: activeJobTypes === item ? "#444262" : "#C1C0C8",
  }),
  tabText: (activeJobTypes, item) => ({
    fontFamily: "Poppins-Medium, sans-serif",
    color: activeJobTypes === item ? "#fff" : "#000",
  }),
});
