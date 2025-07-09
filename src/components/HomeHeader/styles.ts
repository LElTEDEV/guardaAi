import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: "100%",
    height: 324,
    paddingBottom: 18,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
  },

  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },

  total: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fontFamily.medium,
  },

  summary: {
    gap: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
