import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
} from "@shopify/restyle";

import Text from "./Text";
import { Theme } from "../theme";
import Box from "./Box";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  variant: "primary" | "outline";
};

type VariantStyles = RestyleProps & {
  backgroundColor: keyof Theme["colors"];
  color: keyof Theme["colors"];
};

const variantStyles: Record<string, VariantStyles> = {
  primary: {
    backgroundColor: "primary",
    color: "white",
  },
  outline: {
    backgroundColor: "background",
    borderWidth: 2,
    borderColor: "primary",
    color: "primary",
  },
};

const Button = ({ onPress, label, variant, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
      <Box
        {...variantStyles[variant]}
        width={"100%"}
        padding="m"
        borderRadius="l"
      >
        <View {...props}>
          <Text
            textAlign="center"
            variant="button"
            style={{ color: variantStyles[variant].color }}
          >
            {label}
          </Text>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
