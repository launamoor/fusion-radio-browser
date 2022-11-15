const Button = function ({ className, type, children, onClick }) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
