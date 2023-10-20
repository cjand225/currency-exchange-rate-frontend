import React from "react";
import { tableStylesLight, tableStylesDark } from "../common/styles";

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
    <table className="border-collapse text-sm uppercase w-4/6 leading-normal">
      <thead className={tableStylesLight.header + " " + tableStylesDark.header}>
        <tr className={tableStylesLight.row + " " + tableStylesDark.row}>
          <th className="py-3 px-6 text-center">Date</th>
          <th className="py-3 px-6 text-center">Exchange Rate</th>
        </tr>
      </thead>
      <tbody className="text-sm font-light">
        {data &&
          Object.entries(data.exchange_rate).map(([date, rate]) => (
            <tr
              key={date}
              className={tableStylesLight.row + " " + tableStylesDark.row}
            >
              <td
                className={tableStylesLight.data + " " + tableStylesDark.data}
              >
                <div className="flex item-center justify-center">{date}</div>
              </td>
              <td
                className={tableStylesLight.data + " " + tableStylesDark.data}
              >
                <div className="flex item-center justify-center">{rate}</div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
