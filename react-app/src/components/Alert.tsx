import AlertProps from "../interfaces/AlertProps";
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
