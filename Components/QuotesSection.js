import React from "react";

const QuotesSection = ({ title, quotes }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#4A6650] mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="p-6 bg-[#D4E2D4] rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-lg text-[#333333] mb-4 italic">"{quote.text}"</p>
            <div className="flex items-center justify-between">
              <p className="text-[#4A6650] font-medium">— {quote.author}</p>
              <span className="text-sm text-white bg-[#E07A5F] px-3 py-1 rounded-full">
                {quote.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesSection;
