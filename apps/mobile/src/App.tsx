import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CreateProfile from "./CreateProfile";
import FoodRecomendation from "./FoodRecomendation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="CreateProfile"
            component={CreateProfile}
            options={{ title: "Criar Perfil" }}
          />
          <Stack.Screen
            name="FoodRecomendation"
            component={FoodRecomendation}
            options={{ title: "Recomendações" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
