import {
  buttonStylesBase,
  buttonStylesLight,
  buttonStylesDark,
} from "../common/styles";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={
        buttonStylesBase + " " + buttonStylesLight + " " + buttonStylesDark
      }
    >
      {children}
    </button>
  );
};

export default Button;
