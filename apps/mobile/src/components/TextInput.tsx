import {
  TextInput as NativeTextInput,
  StyleSheet,
  View,
  Text as NativeText,
} from "react-native";
import { ComponentProps } from "react";
import Box from "./Box";
import Text from "./Text";

type Props = ComponentProps<typeof NativeTextInput> & {
  label: string;
  unit?: string;
  onChangeText?: (text: string) => void;
};

const TextInput = ({ label, unit, ...props }: Props) => {
  return (
    <Box width={"100%"}>
      <Text paddingLeft="s" variant="subheader" textAlign="left">
        {label}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <NativeTextInput
          {...props}
          style={[styles.input, props.style]}
          placeholderTextColor="#AAAAAA"
        />
        {unit && (
          <View style={{ marginLeft: -40 }}>
            <NativeText>{unit}</NativeText>
          </View>
        )}
      </View>
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#AAAAAA",
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    width: "100%",
  },
});
