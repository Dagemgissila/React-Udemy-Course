const Button = ({ children, textOnly, className = "", ...props }) => {
  let cssClasses = textOnly ? "text-button" : "button";

  // ✅ Correctly append additional classNames
  cssClasses += className ? ` ${className}` : "";

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
};

export default Button;
