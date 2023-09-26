import React from "react";

interface TableProps {
  data: {
    serie_name: string;
    exchange_rate: {
      [date: string]: number;
    };
  } | null;
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center">Date</th>
          <th className="py-3 px-6 text-center">Exchange Rate</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {data &&
          Object.entries(data.exchange_rate).map(([date, rate]) => (
            <tr
              key={date}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex item-center justify-center">{date}</div>
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex item-center justify-center">{rate}</div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
