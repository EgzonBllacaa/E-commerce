import ScrollToTop from "./ScrollToTop";

const Layout = ({ children, className = "" }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div
        className={`
          max-w-[1440px] w-full mx-auto
          ${className}
        `}
      >
        {children}
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Layout;
