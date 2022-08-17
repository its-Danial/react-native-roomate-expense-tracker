import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import colors from "tailwindcss/colors";

type IconButtonProps = {
  iconName: any;
  size: number;
  color: string | undefined;
  onPress?: () => void;
};

const IconButton: FC<IconButtonProps> = (props) => {
  return (
    <View className="rounded-full" style={styles.buttonContainer}>
      <Pressable
        hitSlop={10}
        pressRetentionOffset={10}
        onPress={props.onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={props.iconName} size={props.size} color={props.color} />
      </Pressable>
    </View>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9999,
    padding: 6,
    marginHorizontal: 12,

    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
    borderRadius: 9999,
    backgroundColor: colors.blue[100],
  },
});
