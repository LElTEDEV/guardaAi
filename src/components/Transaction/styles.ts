import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 7,
    height: 72,
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    gap: 7,
    flex: 1,
  },

  value: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },

  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
