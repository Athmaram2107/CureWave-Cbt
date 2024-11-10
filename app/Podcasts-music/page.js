"use client";
import { useState } from "react";

const podcasts = [
  {
    title: "Mental health for managers and employees",
    url: "https://open.spotify.com/embed/episode/0XNLUF9cEUbvBSa3obKVK7",
    description:
      "CBT often uses a step-by-step approach to solving problems, which managers can apply by helping employees address issues in a structured way.",
  },
  {
    title: "Reviewing goals And Values",
    url: "https://open.spotify.com/embed/episode/43qupmdsY7aJBA0vkguKiL",
    description:
      "This CBT approach helps individuals align their goals with core values, fostering motivation and fulfillment.",
  },
  {
    title: "CBT for sports personalities",
    url: "https://open.spotify.com/embed/episode/6tBwOB1lfEsogfrZVSwGUJ",
    description:
      "CBT helps athletes develop mental resilience by managing performance anxiety, reframing negative thoughts, and setting clear, achievable goals.",
  },
  {
    title: "CBT for Insomnia",
    url: "https://open.spotify.com/embed/episode/2tJZsyB0bTvqns9vrF20Lt",
    description:
      "CBT for insomnia focuses on changing unhelpful sleep-related thoughts and behaviors.",
  },
  {
    title: "CBT for OCD",
    url: "https://open.spotify.com/embed/episode/6ZuJjEJ0OpNUEoPSsk4I1w",
    description:
      "CBT for OCD uses techniques like Exposure and Response Prevention (ERP) to help individuals face triggers without engaging in compulsive behaviors.",
  },
  {
    title: "Stress Management for Students",
    url: "https://open.spotify.com/embed/episode/1AXY8pjsY8EjD8U8oEp3FJ",
    description:
      "CBT strategies to help students manage academic stress effectively.",
  },
  {
    title: "Managing Anxiety in Public Speaking",
    url: "https://open.spotify.com/embed/episode/2v9B7qjsB5EjC6F2fOp5XL",
    description:
      "Learn techniques to overcome anxiety related to public speaking.",
  },
];

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredPodcasts = podcasts
    .filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, viewAll ? podcasts.length : 3); // Show only first 3 if viewAll is false

  return (
    <div className="max-w-full bg-[#F2E9E4] mx-auto py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 transition-all duration-300">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#1C2833] text-center mb-6">
        Mental Health Matters: Podcasts for Growth & Healing
      </h2>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search podcasts..."
          className="border border-gray-400 rounded-full py-2 px-4 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] transition-all duration-300"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 sm:left-10 md:left-16 lg:left-20 border-gray-300 h-full top-0"></div>
        {filteredPodcasts.map((podcast, index) => (
          <div
            key={index}
            className="flex items-start mb-8 transition-all duration-500"
          >
            <div className="w-6 h-6 bg-[#8A9A5B] rounded-full border-2 border-[#E6E6FA] shadow-md flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <span className="text-[#F5F5DC] text-xs font-bold">•</span>
            </div>
            <div className="ml-4 w-full">
              <h3
                className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer animate-pulse hover:text-[#1C2833] transition-all duration-300"
                onClick={() => toggleExpand(index)}
              >
                {podcast.title}
              </h3>
              {expandedIndex === index && (
                <div className="mt-2 p-4 bg-[#8A9A5B] border-2 border-[#E6E6FA] rounded-lg shadow-lg transition-all duration-500 ease-in-out transform scale-100">
                  <p className="mb-2 text-[#F5F5DC] text-sm md:text-base lg:text-lg">
                    {podcast.description}
                  </p>
                  <iframe
                    src={podcast.url}
                    width="100%"
                    height="152"
                    className="border-0 rounded-lg shadow-md"
                    allow="encrypted-media"
                    title={podcast.title}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      {!viewAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setViewAll(true)}
            className="py-2 px-6 bg-[#E07A5F] text-white font-semibold rounded-full hover:bg-[#333333] transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
