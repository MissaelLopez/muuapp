import { TouchableOpacity, Text, View, Button } from "react-native";
import { buttonsStyle as styles } from "./Styles";

import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimeButton = () => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  return (
    <View>
      {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
      <TouchableOpacity style={styles.primaryButton} onPress={showDatePicker}>
        <Text style={styles.textPrimaryButton}>
          Date = {date.toDateString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimeButton;
