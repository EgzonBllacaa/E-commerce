const FullWidth = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>{children}</div>
  );
};

export default FullWidth;
