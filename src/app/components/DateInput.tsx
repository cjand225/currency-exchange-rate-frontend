import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  inputStylesBase,
  inputStylesLight,
  inputStylesDark,
} from "../common/styles";

interface DateInputProps {
  label: string;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateInput = ({ label, selectedDate, onDateChange }: DateInputProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
        {label}
      </label>
      <DatePicker
        className={
          inputStylesBase + " " + inputStylesLight + " " + inputStylesDark
        }
        dateFormat="yyyy-MM-dd"
        selected={selectedDate}
        maxDate={new Date()}
        onChange={(date) => date && onDateChange(date)}
      />
    </div>
  );
};

export default DateInput;
