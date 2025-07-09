import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { router } from "expo-router";
import { StatusBar, View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883.65" },
};

const targets = [
  {
    id: "1",
    name: "Apple Watch",
    current: "R$ 580,00",
    target: "R$ 1.790,00",
    percentage: "50%",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonômica",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
    percentage: "75%",
  },
  {
    id: "3",
    name: "Fazer uma viagem para o Rio de Janeiro",
    current: "R$ 1.200,00",
    target: "R$ 3.000,00",
    percentage: "75%",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
