import React from "react";

const Customers = () => {
  const companies = [
    { name: "Cigna", logo: "Images/company1.png" },
    { name: "Pear Therapeutics", logo: "Images/company5.png" },
    { name: "Optum", logo: "Images/company3.png" },
    { name: "sondermind", logo: "Images/company4.png" },
  ];

  return (
    <section className="py-12 bg-[#F2E9E4] border-[#A3B18A] shadow-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-[#4A6650]  font-bold font-heading mt-2 mb-16">
          Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-16 mb-4 rounded-3xl"
              />
              <span className="text-[#333333] text-lg">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
