const AlertStatus = ({ ok, message }) => {
  const alertType = ok ? "info" : "danger";
  return <div className={`alert alert-${alertType}`}>{message}</div>;
};

export default AlertStatus;
