import AlertProps from "../interfaces/AlertProps";
const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
