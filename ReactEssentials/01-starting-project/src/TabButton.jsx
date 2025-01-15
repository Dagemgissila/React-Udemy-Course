const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <button className={isSelected ? "active" : null} onClick={onSelect}>
      {children}
    </button>
  );
};

export default TabButton;
