const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 rounded-md bg-stone-700 text-stone-400 hover:text-stone-600 "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
