import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 16,
    paddingVertical: 16,
  },

  content: {
    flex: 1,
    gap: 7,
  },

  name: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fontFamily.medium,
  },

  status: {
    fontSize: 10,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
});
