import { ScrollView } from "react-native";
import Box from "./components/Box";
import Text from "./components/Text";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import theme from "./theme";
import { useState } from "react";

export default function CreateProfile({
  navigation,
}: Readonly<{ navigation: any }>) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
      automaticallyAdjustKeyboardInsets={true}
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
          Criar Perfil
        </Text>
        <Text variant="subheader" paddingTop="s" textAlign="center">
          Preencha as informações abaixo para {"\n"}
          criar seu perfil
        </Text>
        <Box width={"100%"} marginTop="m" gap="m">
          <TextInput label="Nome" onChangeText={setName} value={name} />
          <TextInput
            inputMode="decimal"
            label="Peso"
            unit="Kg"
            onChangeText={setWeight}
            value={weight}
          />
          <TextInput
            inputMode="numeric"
            label="Idade"
            onChangeText={setAge}
            value={age}
          />
          <TextInput
            label="Qual seu objetivo?"
            onChangeText={setGoal}
            value={goal}
          />
        </Box>
        <Box width={"100%"} marginTop="m" gap="m">
          <Button
            label="Próximo"
            onPress={() =>
              navigation.navigate("FoodRecomendation", {
                name,
                weight,
                age,
                goal,
              })
            }
            variant="primary"
          />
        </Box>
      </Box>
    </ScrollView>
  );
}
