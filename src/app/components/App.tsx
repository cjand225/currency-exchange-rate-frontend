import React, { useState } from "react";
import Table from "./Table";
import SearchCurrency from "./SearchCurrency";
import { Grid } from "react-loader-spinner";
import { formatDate, isValidDateRange } from "../common/dates";
import ErrorMessage from "./ErrorMessage";

type ExchangeData = {
  serie_name: string;
  exchange_rate: { [date: string]: number };
};

const App = () => {
  const [data, setData] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (
    fromCurrency: string,
    toCurrency: string,
    startDate: Date,
    endDate: Date
  ) => {
    // Reset the error
    setError(null);
    setData(null);

    if (!isValidDateRange(startDate, endDate)) {
      setError("Start date must be before end date.");
      return; // Return early without making the fetch call
    }

    // Format the dates to 'yyyy-mm-dd'
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    // Determine the base URL based on the environment (development or production)
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000"
        : "https://jamesandrews.dev";

    // Base API path
    const apiPath = "/exchange-api/v1/exchange-rates/";

    // Query parameters
    const queryParams = [
      `from_currency=${fromCurrency}`,
      `to_currency=${toCurrency}`,
      `start_date=${formattedStartDate}`,
      `end_date=${formattedEndDate}`,
    ].join("&");

    // Final constructed URL
    const apiUrl = `${baseUrl}${apiPath}?${queryParams}`;

    setLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorBody) => {
            throw new Error(errorBody.error);
          });
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-full items-center justify-between font-mono text-lg lg:flex">
      <SearchCurrency onSearch={handleSearch} />
      {loading ? (
        <Grid
          height="80"
          width="80"
          color="#1F2937"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        data && <Table data={data} />
      )}
    </div>
  );
};

export default App;
