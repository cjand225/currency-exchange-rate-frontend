import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import DateInput from "./DateInput";
import Button from "./Button";

interface SearchCurrencyProps {
  onSearch: (
    fromCurrency: string,
    toCurrency: string,
    startDate: Date,
    endDate: Date
  ) => void;
}

const SearchCurrency = ({ onSearch }: SearchCurrencyProps) => {
  // State for the "From Currency"
  const [fromCurrency, setFromCurrency] = useState("");

  // State for the "To Currency"
  const [toCurrency, setToCurrency] = useState("");

  // Handler for the "From Currency"
  const handleFromCurrencyChange = (value: string) => {
    setFromCurrency(value);
  };

  // Handler for the "To Currency"
  const handleToCurrencyChange = (value: string) => {
    setToCurrency(value);
  };

  // State for the "Start Date"
  const [startDate, setStartDate] = useState(new Date());

  // State for the "End Date"
  const [endDate, setEndDate] = useState(new Date());

  // Handler for the "Start Date"
  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  // Handler for the "End Date"
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(fromCurrency, toCurrency, startDate, endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <DateInput
          label="Start Date"
          selectedDate={startDate}
          onDateChange={handleStartDateChange}
        />

        <DateInput
          label="End Date"
          selectedDate={endDate}
          onDateChange={handleEndDateChange}
        />

        <CurrencyInput
          label="From Currency"
          id="fromCurrency"
          placeholder="USD"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        />

        <CurrencyInput
          label="To Currency"
          id="toCurrency"
          placeholder="CAD"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        />

        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchCurrency;
