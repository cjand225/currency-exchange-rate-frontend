import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  label: string;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateInput = ({ label, selectedDate, onDateChange }: DateInputProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <DatePicker
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        dateFormat="yyyy-MM-dd"
        selected={selectedDate}
        maxDate={new Date()}
        onChange={(date) => date && onDateChange(date)}
      />
    </div>
  );
};

export default DateInput;
