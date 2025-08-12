import ScrollToTop from "./ScrollToTop";

const FullWidth = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {children}
      <ScrollToTop />
    </div>
  );
};

export default FullWidth;
