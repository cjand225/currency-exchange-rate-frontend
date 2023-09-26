import React from "react";

interface CurrencyInputProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CurrencyInput = ({
  label,
  id,
  placeholder,
  value,
  onChange,
}: CurrencyInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert input value to uppercase and update it
    const uppercasedValue = event.target.value.toUpperCase();
    onChange(uppercasedValue);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        maxLength={3} // Set the maximum length of input value to 3
        required
      />
    </div>
  );
};

export default CurrencyInput;
