interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
