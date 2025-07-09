import { router } from "expo-router";
import { Text, View, Button } from "react-native";

import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Olá, Expo Router</Text>

      <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/12")}
      />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/132")}
      />
    </View>
  );
}
