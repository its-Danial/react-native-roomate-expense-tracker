import React, { FC, useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../UI/Button";

type DatePickerProps = {
  onConfirm: (date: Date) => void;
};

const DatePicker: FC<DatePickerProps> = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    props.onConfirm(date);
    hideDatePicker();
  };
  return (
    <View>
      <Button mode="flat" onPress={showDatePicker}>
        Show Date Picker
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default DatePicker;
