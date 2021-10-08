import IonIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { categories } from "../assets/DummyData/Category";
import Theme from "./Theme";

interface Props {
  onPress: () => void;
  onSelect: (category: string) => void;
}

export default function CategorySidebar({ onPress, onSelect }: Props) {
  return (
    <Modal animationType="none" onRequestClose={onPress} transparent={true}>
      <View style={[{ flexDirection: "row-reverse" }, { flex: 1 }]}>
        <View style={styles.modalContainer}>
          <View style={styles.categoryTopWrapper}>
            <Text style={styles.category}>Categories</Text>
            <View style={styles.closeIcon}>
              <IonIcons
                name="close"
                size={20}
                color={Theme.colors.secondary}
                onPress={onPress}
              />
            </View>
          </View>
          <View
            style={[
              { borderBottomColor: Theme.colors.secondary },
              { borderBottomWidth: 2 },
            ]}
          ></View>
          <ScrollView>
            <Pressable
              onPress={() => onSelect("")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Theme.colors.primary
                    : Theme.colors.filterModal,
                },
              ]}
            >
              <Text style={styles.categoryList}>All</Text>
            </Pressable>
            {categories.map((item) => {
              return (
                <Pressable
                  key={item.id.toString()}
                  onPress={() => onSelect(item.name.toString())}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? Theme.colors.primary
                        : Theme.colors.filterModal,
                    },
                  ]}
                >
                  <Text style={styles.categoryList}>
                    {item.name.toString()}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.invisibleView}></View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Theme.colors.filterModal,
    flex: 2,
    marginTop: 56,
    marginBottom: 80,
  },
  categoryTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeIcon: {
    alignItems: "flex-end",
  },
  invisibleView: {
    flex: 2,
  },
  categoryList: {
    padding: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: Theme.colors.secondary,
  },
  category: {
    padding: 1,
    marginLeft: 5,
    fontWeight: "bold",
    color: Theme.colors.secondary,
    fontSize: 25,
  },
});
