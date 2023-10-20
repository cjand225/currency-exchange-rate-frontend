import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import DateInput from "./DateInput";
import Button from "./Button";
import useGenericState from "../hooks/useGenericState";

interface SearchCurrencyProps {
  onSearch: (
    fromCurrency: string,
    toCurrency: string,
    startDate: Date,
    endDate: Date
  ) => void;
}

const SearchCurrency = ({ onSearch }: SearchCurrencyProps) => {
  // State & handles for currencies
  const [fromCurrency, handleFromCurrencyChange] = useGenericState<string>("");
  const [toCurrency, handleToCurrencyChange] = useGenericState<string>("");

  // State & handlers for the dates
  const [startDate, handleStartDateChange] = useGenericState<Date>(new Date());
  const [endDate, handleEndDateChange] = useGenericState<Date>(new Date());

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
