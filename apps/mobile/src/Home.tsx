import Box from "./components/Box";
import Text from "./components/Text";
import Button from "./components/Button";

export default function Home({ navigation }: Readonly<{ navigation: any }>) {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
      padding="xl"
    >
      <Text variant="header" textAlign="center">
        Bem-vindo ao Fitgenius
      </Text>
      <Text variant="subheader" paddingTop="s" textAlign="center">
        Seu companheiro IA para um {"\n"}
        healthstyle mais saudável
      </Text>
      <Box width={"100%"} marginTop="m" gap="m">
        <Button
          variant="primary"
          onPress={() => {
            navigation.navigate("CreateProfile");
          }}
          label="Cadastrar"
        />
        <Button variant="outline" onPress={() => {}} label="Entrar" />
      </Box>
    </Box>
  );
}
