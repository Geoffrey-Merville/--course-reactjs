import AlertProps from "../interfaces/AlertProps";
const Alert = ({ text }: AlertProps) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
