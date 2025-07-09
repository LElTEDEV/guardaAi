import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  label: {
    fontSize: 12,
    marginBottom: 5,
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
  },

  status: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },

  value: {
    flex: 1,
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },

  target: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
  },

  percentage: {
    fontSize: 14,
    color: colors.blue[500],
    fontFamily: fontFamily.bold,
  },

  progress: {
    height: 5,
    width: "100%",
    marginTop: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.gray[300],
  },

  currentProgress: {
    height: 5,
    backgroundColor: colors.blue[500],
  },
});
