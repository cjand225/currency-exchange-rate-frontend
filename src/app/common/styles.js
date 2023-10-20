// Dark Mode Styles
const buttonDefaultDark = "bg-gray-800 text-gray-100 border border-gray-700";
const buttonHoverDark = "hover:bg-gray-700 hover:border-gray-600";
const buttonActiveFocusedDark = "active:bg-gray-900 focus:ring focus:ring-gray-500 focus:ring-opacity-50";

const inputDefaultDark = "bg-gray-400 text-gray-600 placeholder-gray-200 border border-gray-800";
const inputHoverDark = "hover:border-gray-500";
const inputActiveFocusedDark = "focus:bg-gray-500 focus:border-gray-700 focus:ring focus:ring-gray-500 focus:ring-opacity-50";

const tableHeaderStylesDark = "bg-gray-700 text-gray-400 border-b border-gray-300 p-2";
const tableDataStylesDark = "bg-gray-800 text-gray-200 border-b border-gray-600 p-2";
const tableRowStylesDark = "even:bg-gray-700";

// Light Mode Styles
const buttonDefaultLight = "bg-gray-100 text-gray-200 border border-gray-200";
const buttonHoverLight = "hover:bg-gray-200 hover:border-gray-300";
const buttonActiveFocusedLight = "active:bg-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50";

const inputDefaultLight = "bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300";
const inputHoverLight = "hover:border-gray-400";
const inputActiveFocusedLight = "focus:bg-white focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50";

const tableHeaderStylesLight = "bg-gray-200 text-gray-300 border-b border-gray-300 p-2";
const tableDataStylesLight = "bg-white text-gray-900 border-b border-gray-300 p-2";
const tableRowStylesLight = "even:bg-gray-100";

// Base Styles
export const buttonStylesBase = "font-bold py-2 px-4 rounded";
export const inputStylesBase = "text-sm rounded-lg block w-full p-2.5";

// Combined styles for public usage
export const buttonStylesDark = `${buttonDefaultDark} ${buttonHoverDark} ${buttonActiveFocusedDark}`;
export const inputStylesDark = `${inputDefaultDark} ${inputHoverDark} ${inputActiveFocusedDark}`;

export const buttonStylesLight = `${buttonDefaultLight} ${buttonHoverLight} ${buttonActiveFocusedLight}`;
export const inputStylesLight = `${inputDefaultLight} ${inputHoverLight} ${inputActiveFocusedLight}`;

export const tableStylesLight = {
    header: tableHeaderStylesLight,
    data: tableDataStylesLight,
    row: tableRowStylesLight,
};

export const tableStylesDark = {
    header: tableHeaderStylesDark,
    data: tableDataStylesDark,
    row: tableRowStylesDark,
};
