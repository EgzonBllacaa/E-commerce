const ShippingCard = ({
  image,
  title,
  description,
  className = "",
  classNameParagraph = "",
  classNameTitle = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:w-1/4 md:w-1/5 w-[150px] px-8 py-12 bg-light-gray gap-4 ${className}`}
    >
      <img className="max-w-12" src={image} alt="" />
      <div className="flex flex-col gap-2">
        <h4 className={`text-lg font-medium ${classNameTitle}`}>{title}</h4>
        <p className={`text-sm text-neutral-500 ${classNameParagraph}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShippingCard;
