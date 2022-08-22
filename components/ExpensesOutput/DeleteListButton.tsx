import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import colors from "tailwindcss/colors";

type DeleteListButtonProps = {
  showButton: boolean;
  onDelete: (deleteItemId: string) => void;
  id: string | undefined;
};

const DeleteListButton: FC<DeleteListButtonProps> = (props) => {
  const pressHandler = () => {
    props.onDelete(props.id as string);
  };

  return (
    <View className={`flex-1 flex-row justify-end ${props.showButton ? "visible" : "hidden"}`}>
      <Pressable
        onPress={pressHandler}
        className="p-1 items-center justify-center my-[6px] mx-[2px] rounded-xl bg-red-200 active:shadow-list hover:bg-red-300
      active:bg-red-300 active:opacity-70 border border-red-500"
      >
        <View className="items-center justify-center p-4">
          <Ionicons name="trash" color={colors.red[500]} size={26} />
        </View>
      </Pressable>
    </View>
  );
};
export default DeleteListButton;
