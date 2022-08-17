import React, { FC, useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../UI/Button";
import DateButton from "../UI/DateButton";

type DatePickerProps = {
  onConfirm: (identifier: string, inputValue: string | Date) => void;
  date: Date;
};

const DatePicker: FC<DatePickerProps> = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [date, setDate] = useState<Date>(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    props.onConfirm("date", date);

    hideDatePicker();
  };
  return (
    <View className="">
      <DateButton date={props.date} onPress={showDatePicker}>
        Show Date Picker
      </DateButton>
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
