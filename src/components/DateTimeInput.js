import { TouchableOpacity, Text, View, Button } from "react-native";
import { styles } from "./Styles";

import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons} from "@expo/vector-icons";

const DateTimeInput = () => {
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
    <View style={styles.inputBoxCont}>
      {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
      <MaterialIcons name="date-range" size={24} style={styles.iconStyle} />

      <TouchableOpacity onPress={showDatePicker} >
        <Text style={{color:"#936037"}}>
        {date.toDateString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimeInput;
