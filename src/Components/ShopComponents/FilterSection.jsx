import {
  faArrowDownShortWide,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FilterSection = ({
  CATEGORIES,
  selectedCategories,
  setSelectedCategories,
  PRICE_RANGES,
  selectedPriceRanges,
  setSelectedPriceRanges,
}) => {
  const [showFilter, setShowFilter] = useState(true);
  const togglePrice = (range) => {
    const exists = selectedPriceRanges.some(
      (r) => r.min === range.min && r.max === range.max
    );
    if (exists) {
      setSelectedPriceRanges((prev) =>
        prev.filter((r) => r.min !== range.min || r.max !== range.max)
      );
    } else {
      setSelectedPriceRanges((prev) => [...prev, range]);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="flex cursor-pointer gap-2 items-center"
      >
        {showFilter ? (
          <FontAwesomeIcon icon={faFilter} />
        ) : (
          <FontAwesomeIcon icon={faArrowDownShortWide} />
        )}

        <span>Filter</span>
      </button>
      {showFilter && (
        <>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase">Categories</span>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((cat, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedCategories(cat)}
                  className={`capitalize cursor-pointer hover:text-neutral-800 hover:border-b hover:border-zinc-600 hover:w-fit ${
                    selectedCategories === cat
                      ? " text-neutral-950 font-semibold  border-b w-fit"
                      : "text-zinc-500 font-medium"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase">Price</span>
            {PRICE_RANGES.map((range) => (
              <label
                key={`${range.min} - ${range.max}`}
                className="flex justify-between items-center gap-2 text-zinc-500 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="peer hidden"
                  checked={selectedPriceRanges.some(
                    (r) => r.min === range.min && r.max === range.max
                  )}
                  onChange={() => togglePrice(range)}
                />
                <span>{range.label}</span>
                <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-zinc-800 peer-checked:border-zinc-800 transition"></div>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterSection;
