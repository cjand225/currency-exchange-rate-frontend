import React, { useState } from "react";
import Table from "./Table";
import SearchCurrency from "./SearchCurrency";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (
    fromCurrency: string,
    toCurrency: string,
    startDate: Date,
    endDate: Date
  ) => {
    // Format the dates to 'yyyy-mm-dd'
    const formattedStartDate = startDate
      .toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    const formattedEndDate = endDate
      .toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    const apiUrl = `http://localhost:8000/exchange_rates/?from_currency=${fromCurrency}&to_currency=${toCurrency}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`;

    setLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-full items-center justify-between font-mono text-lg lg:flex">
      <SearchCurrency onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <Table data={data} />}
    </div>
  );
};

export default App;
