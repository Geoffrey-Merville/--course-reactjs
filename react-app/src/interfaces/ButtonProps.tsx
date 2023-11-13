interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export default ButtonProps;
