import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: colors.gray[100],
  },

  option: {
    gap: 7,
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
  },
});
