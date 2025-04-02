import { ScrollView } from "react-native";
import Box from "./components/Box";
import Text from "./components/Text";
import theme from "./theme";

export default function FoodRecomendation({
  route,
}: Readonly<{ navigation: any; route: any }>) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <Box
        height={"100%"}
        width={"100%"}
        justifyContent="center"
        alignItems="center"
        backgroundColor="background"
        padding="xl"
      >
        <Text variant="header" textAlign="center">
          Ideias de Refeições para {route.params.name}
        </Text>
        <Text variant="body" paddingTop="s" textAlign="center">
          Sugestões de cardápio baseado em padrões nutricionais e suas
          informações: {"\n"}
          {route.params.weight}kg, {route.params.age} anos e objetivo de{" "}
          {route.params.goal}
        </Text>
        <Box width={"100%"} marginTop="m" gap="m">
          <Text variant="subheader" textAlign="left">
            Café da Manhã
          </Text>
          <Text variant="body" textAlign="left">
            1 fatia de pão integral com 1 colher de sopa de pasta de amendoim e
            1 banana
          </Text>
          <Text variant="subheader" textAlign="left">
            Almoço
          </Text>
          <Text variant="body" textAlign="left">
            100g de peito de frango grelhado com 1 xícara de brócolis cozidos e
            1/2 xícara de arroz integral
          </Text>
          <Text variant="subheader" textAlign="left">
            Jantar
          </Text>
          <Text variant="body" textAlign="left">
            Salada com folhas verdes, tomate, cenoura ralada e 100g de atum em
            água
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
}
